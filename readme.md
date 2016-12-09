# Album App - To Learn Styling and Building React-Native App

1) Generated the project using React-native cli
2) Started the Project via cli by running react-native run-ios
3) Created components
    - Two types of component ( Functional & Class Based components)
    - Functional components are presentational components ( just produce some jsx
      and show some data back to the user)
    - Class based components which have access to component level state and Life
      cycle methods (State is only available to class based components )
    - State is used to record and react to user's action, so in this app we have
    state only for AlbumList components, because its fetch list of albums and then
    we assign or update the object using 'this.setState()'
    - We only update the state object with this.setState method
    - Since we are calling setState, our component will be rerender after the
    album object is set.
    - We have albumDetail component, by mapping over our list of albums
    - Then we have passing album by using the "album" props.
    - props allows as to pass any type of data from parent to child components

    - we build some re-usable components ( buttons, card header )
