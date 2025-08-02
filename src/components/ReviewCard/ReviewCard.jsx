import { IoStar, IoStarOutline } from 'react-icons/io5';
import './ReviewCard.css'

function ReviewCard({ review }) {

    function formatDate(reviewDate) {
        const date = new Date(reviewDate);

        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        const hour = date.getHours();
        const minutes = date.getMinutes()

        return `${day}/${month}/${year} alle ore ${hour}:${minutes}`
    }

    function fetchRating(vote) {
        const reviewArr = [];
        for (let i = 0; i < 5; i++) {
            if (i < vote) {
                reviewArr.push(<IoStar size={25} color='yellow' />)
            } else {
                reviewArr.push(<IoStarOutline size={25} color='yellow' />)
            }
        }

        return reviewArr;
    }

    return (
        <div className='reviewContainer'>
            <div className="reviewBody">
                <h3>{fetchRating((review?.vote).toFixed(1))}</h3>
                <p>"{review.text}"</p>
            </div>

            <div className='reviewFooter'>
                <div className="userImage">
                    <img
                        src='https://cdn.pixabay.com/photo/2018/11/13/22/01/avatar-3814081_1280.png'
                    />
                </div>
                <div className="userDetails">
                    <p className='username'>{review.name}</p>
                    <p className='reviewDate'>{formatDate(review.created_at)}</p>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard