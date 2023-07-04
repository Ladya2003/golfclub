const NewTodoForm = ({ value, updateText, handleAction }) => {
  return (
    <label className="comments-sending-container">
      <input
        className="comments-input"
        value={value}
        onChange={(e) => updateText(e.target.value)}
        placeholer='Leave a comment'
      />
      <button className="comments-button" onClick={handleAction}>Send</button>
    </label>
  );
};

export default NewTodoForm;
