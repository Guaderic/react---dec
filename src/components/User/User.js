const User = ({user}) => {
const { position, photo } = user

    return (
        <div>
                <div>
                    <img src={photo} alt={position}/>

                    <h2>{position}</h2>
                    
                </div>
        </div>
    );
};

export {User};