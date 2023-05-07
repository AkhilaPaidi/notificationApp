const Notification = (props) => {
  const { className, IconUrl, message } = props;
  const containerClassName = `notify-container ${className}`;
  return (
    <div className={containerClassName}>
      <img class="icon" src={IconUrl} />
      <p className="message">{message}</p>
    </div>
  );
};

const element = (
  <div className="notify-class-container">
    <h1 className="title">Notifications</h1>
    <div className="notify-list-container">
      <Notification
        className="primary-bg-color"
        IconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        message="Information Message"
      />
      <Notification
        className="success-bg-color"
        IconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        message="Success Message"
      />
      <Notification
        className="warning-bg-color"
        IconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        message="Warning Message"
      />
      <Notification
        className="error-bg-color"
        IconUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        message="Error Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
