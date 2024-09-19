import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AddEvent from "./pages/AddEvent";
import EventDetail from './context/EventDetail';
import Messaging from './pages/Messaging';
import Filters from './pages/Filters';
import SearchBar from './components/SearchBar';
import Profile from './pages/Profile';
import MyEvents from './pages/MyEvents';
import MapApp from './components/Map';
import Settings from './pages/Settings';
import Modal from './components/Modal';
import { DataStore } from '@aws-amplify/datastore';
import { Event } from './models';
import axios from 'axios';

interface SearchResult {
  name: string;
  longitude: number;
  latitude: number;
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden; 
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 25%; 
  left: 10px;
  z-index: 10; 
`;

const TopBar = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center; 
  width: 100%;
  padding: 10px;
  position: absolute; /
  top: 0;
  left: 0;
  z-index: 10; 

`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%; /* Ensure the content takes full height */
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 10px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const App: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>(''); // Add this line
  const [isProfileVisible, setIsProfileVisible] = useState(false);
  const [isAddingEvent, setIsAddingEvent] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null); // Change this line
  const [areFiltersVisible, setAreFiltersVisible] = useState(false);
  const [isMyEventsVisible, setIsMyEventsVisible] = useState(false);
  const [isMessagingVisible, setIsMessagingVisible] = useState(false);
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  const [viewport, setViewport] = useState({
    longitude: -100.0,
    latitude: 40.0,
    zoom: 3.5
  });
  const [searchResult, setSearchResult] = useState<SearchResult | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      const events = await DataStore.query(Event);
      setEvents(events);
    };
    fetchEvents();
  }, [isAddingEvent]);

  const openProfile = () => {
    setIsProfileVisible(true);
  };

  const closeProfile = () => {
    setIsProfileVisible(false);
  };

  const openAddEventForm = () => {
    setIsAddingEvent(true);
  };

  const closeAddEventForm = () => {
    setIsAddingEvent(false);
  };

  const openEventDetail = (eventId: string) => {
    const event = events.find(event => event.id === eventId) || null;
    setSelectedEvent(event);
  };

  const closeEventDetail = () => {
    setSelectedEvent(null);
  };

  const openFilters = () => {
    setAreFiltersVisible(true);
  };

  const closeFilters = () => {
    setAreFiltersVisible(false);
  };

  const openMyEvents = () => {
    setIsMyEventsVisible(true);
  };

  const closeMyEvents = () => {
    setIsMyEventsVisible(false);
  };

  const openMessaging = () => {
    setIsMessagingVisible(true);
  };

  const closeMessaging = () => {
    setIsMessagingVisible(false);
  };

  const openSettings = () => {
    setIsSettingsVisible(true);
  };

  const closeSettings = () => {
    setIsSettingsVisible(false);
  };

  const handleSearchSubmit = async (query: string) => {
    console.log('Search submitted:', query);
    try {
      const response = await axios.get(`https://nominatim.openstreetmap.org/search`, {
        params: {
          q: query,
          format: 'json',
          limit: 1,
        },
      });

      if (response.data && response.data.length > 0) {
        const result = response.data[0];
        setSearchResult({
          name: result.display_name,
          longitude: parseFloat(result.lon),
          latitude: parseFloat(result.lat),
        });
        setViewport({
          longitude: parseFloat(result.lon),
          latitude: parseFloat(result.lat),
          zoom: 10,
        });
      } else {
        setSearchResult(null);
        console.log('No results found');
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
      setSearchResult(null);
    }
  };

  return (
      <AppContainer>
        <TopBar>
          <SearchBar 
            searchQuery={searchQuery} 
            setSearchQuery={setSearchQuery} 
            onSearch={() => handleSearchSubmit(searchQuery)} // Update this line
          />
        </TopBar>
        <MapApp 
          events={events} 
          selectedEvent={selectedEvent} 
          setSelectedEvent={setSelectedEvent} 
          viewport={viewport} 
          setViewport={setViewport} 
          searchResult={searchResult}
        />
        <ButtonsContainer>
          <Button onClick={openProfile}>Profile</Button>
          <Button onClick={openAddEventForm}>Add Event</Button>
          <Button onClick={openMyEvents}>My Events</Button>
          <Button onClick={openFilters}>Event Filters</Button>
          <Button onClick={openMessaging}>Messaging</Button>
          <Button onClick={openSettings}>Settings</Button>
        </ButtonsContainer>
        <Content>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
            <MapApp 
              events={events} 
              selectedEvent={selectedEvent} 
              setSelectedEvent={setSelectedEvent} 
              viewport={viewport} 
              setViewport={setViewport}
              searchResult={searchResult} 
            />
          </div>
          {isAddingEvent && <AddEvent onClose={closeAddEventForm} />}
          {selectedEvent && <EventDetail eventId={selectedEvent.id} onClose={closeEventDetail} />}
        </Content>
        <Modal show={isProfileVisible} onClose={closeProfile}>
          <Profile />
        </Modal>
        <Modal show={isAddingEvent} onClose={closeAddEventForm}>
          <AddEvent onClose={closeAddEventForm} />
        </Modal>
        <Modal show={areFiltersVisible} onClose={closeFilters}>
          <Filters onClose={closeFilters} /> 
        </Modal>
        <Modal show={isMyEventsVisible} onClose={closeMyEvents}>
          <MyEvents onClose={closeMyEvents} /> 
        </Modal>
        <Modal show={isMessagingVisible} onClose={closeMessaging}>
          <Messaging />
        </Modal>
        <Modal show={isSettingsVisible} onClose={closeSettings}>
          <Settings />
        </Modal>
      </AppContainer>
  );
};

export default App;
