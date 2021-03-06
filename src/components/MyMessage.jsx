const MyMessage = ({ message }) => {
    //submit image feature
    if(message?.attachments?.length > 0) {
        return (
            <img 
                src={message.attachments[0].file}
                alt="message-attachment"
                className="message-image"
                style={{ float: 'right'}}            
            />
        )
    } //otherwise submit message
    return (
        <div className="message" style={{float:'right', marginRight: '18px', color:'white', fontWeight: "bold", backgroundColor: 'rgb(22,188,237,1)' }}>
            {message.text}
        </div>
    );
}

export default MyMessage;