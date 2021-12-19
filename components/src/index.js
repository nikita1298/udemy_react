import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard >
                <CommentDetail author="Nikita" timeAgo="Today at 4:45pm" commentText="You are intelligent!" imageSrc={faker.image.people()} />
            </ApprovalCard>
            <ApprovalCard >
                <CommentDetail author="Kunjesh" timeAgo="Today at 2:45pm" commentText="You are brillient!" imageSrc={faker.image.people()} />
            </ApprovalCard >
            <ApprovalCard >
                <CommentDetail author="Het" timeAgo="Yesterday at 3:03pm" commentText="You are clever!" imageSrc={faker.image.imageUrl()} />
            </ApprovalCard >
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'))