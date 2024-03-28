import styled from "styled-components";

export const NotificationBox = styled.div`
  background-color: #ffffff;
  border: 1px solid #dddfe2;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  padding: 12px;
  max-width: 250px;
  overflow-y: auto;
  width: 250px;
`;

export const NotificationItem = styled.div`
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f2f5;
  }

  .notification-content {
    flex: 1;
    overflow: hidden;
  }

  .notification-text {
    font-weight: 500;
    color: #050505;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .notification-time {
    font-size: 0.8rem;
    color: #606770;
  }
`;
