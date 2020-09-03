import React from 'react';
import RoomList from './RoomList';
import RoomFilter from './RoomFilter';
import {withRoomConsumer} from '../context';
import Loading from './Loading';

const RoomsContainer = ({context}) => {
  const {loading , sortedRooms , rooms} = context;
  if (loading) {
       return <Loading/>
   }
   return(
          <React.Fragment>
        <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
        </React.Fragment>
        )
}


export default withRoomConsumer(RoomsContainer);







// import RoomList from './RoomList';
// import RoomFilter from './RoomFilter';
// import {RoomConsumer} from '../context';
// import Loading from './Loading';

// const RoomsContainer = () => {
//   return (
//     <RoomConsumer>
//       {
//         (value) => {
          
//           const {loading , sortedRooms , rooms} = value

//             if(loading){
//               return <Loading/>
//             }
//           return(
//       <div>
//       hello room container
//       <RoomList rooms={rooms} />
//       <RoomFilter rooms={sortedRooms} />
//     </div>
//           );
//         }
//       }

//     </RoomConsumer>
//   )
// }

// export default RoomsContainer;