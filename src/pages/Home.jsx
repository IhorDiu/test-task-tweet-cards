const Home = () => {
  return (
    <main>
      <h1>Technical specification</h1>

      <p>
        1. According to the layout, user cards are implemented.
        <br />
        2. When clicking on the Follow button, the text of the button changes to
        Following, the color of the button and the number of followers change.
        <br />
        3. When the pages are updated, the final result of the user's actions is
        fixed.
        <br />
        4. Created a personal backend for development using the UI service
        mockapi.io, with the following fields: id, user, tweets, followers,
        avatar.
        <br />
        5. Pagination performed, 3 tweets are displayed on one page of
        pagination, the rest get married when you click Load More
        <br />
        6. Created routing using React Router.
        <br />
        7. Added Dropdown filtering with 3 options: show all, follow, follow.
      </p>
    </main>
  );
};

export default Home;
