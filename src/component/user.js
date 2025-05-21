import React from "react"
import avatar from "../images/woman.png"
import starFilled from "../images/fill_star.png"
import starEmpty from "../images/empty_star.png"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "Jyo",
        lastName: "Dombe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    /**
     * Challenge: Use a ternary to determine which star image variable
     * should be used based on the `contact.isFavorite` property. Test 
     * your results by manually changing the isFavorite value in state.
     * 
     * `true` => starFilled
     * `false` => starEmpty
     */
    
    let starIcon = contact.isFavorite? starFilled : starEmpty
    const starAltText = contact.isFavorite ? "Filled star icon (favorite)" : "Empty star icon (not favorite)"

    function toggleFavorite() {
        setContact(prevContact => ({
            ...prevContact,
            isFavorite: !prevContact.isFavorite
        }))
    }

    return (
        <main>
            <article className="card">
                <img
                    src={avatar}
                    className="avatar"
                    alt="User profile picture of John Doe"
                />
                <div className="info">
                    <button
                        onClick={toggleFavorite}
                        aria-pressed={contact.isFavorite}
                        aria-label={contact.isFavorite ? "Remove from favorites" : "Add to favorites"}
                        className="favorite-button"
                    >
                        <img
                            src={starIcon}
                            alt={starAltText}
                            className="favorite"
                        />
                    </button>
                    <h2 className="name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="email">{contact.email}</p>
                </div>

            </article>
        </main>
    )
}
