import React from 'react';
import styled from 'styled-components';

const Tabs = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  border-radius: 5px;
  position: relative;
  width: 100%;
`;

const Tab = styled.li`
  margin: 5px 0;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: left;

  &:hover {
    background: #0056b3;
  }
`;

const Profile: React.FC = () => {
    return (
        <div>
            <Tabs>
                <Tab>
                    <Button>Pro Account</Button>
    </Tab>
    <Tab>
    <Button>My Account</Button>
    </Tab>
    <Tab>
    <Button>Help & Support</Button>
    </Tab>
    <Tab>
    <Button>Log Out</Button>
    </Tab>
    </Tabs>
    </div>
);
};

export default Profile;
