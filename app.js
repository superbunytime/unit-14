$(() => {
  const form = $("form");
  form.submit((evt) => {
    evt.preventDefault();
  });

  async function axiosTest(q, api_key) {
    let random = Math.floor(Math.random() * 49);
    let res = await axios.get("https://api.giphy.com/v1/gifs/search?", {
      params: { q, api_key },
    });
    const gif = `<img src = ${res.data.data[random].images.downsized.url}>`;
    const gifDump = $("#gifDump");
    gifDump.append(gif);
    return res.data.data[random].url;

    //set to random query and test, then apply dynamic search variable taken from the input value
    //deleting all of those elements will be easy.

    //TODO
    //hit my head really hard the next time i say something is going to be easy
  }
  $("#srchBtn").click(() => {
    let search = $("#search").val();
    console.log(search);
    const giphyPost = axiosTest(
      `${search} bunny`,
      "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
      //enabling all search results to be bunny-related
    );
    //I have modified the project
    //pray I do not modify it further
  });
  $("#remove").click(() => {
    $("#gifDump").empty();
  }); //orbital laser

  // for(let i = 0; i < 1000; i++){
  //   axiosTest("bunny", "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym")
  // } //uncomment to die instantly
  //API rate limit is 1000 calls per day for the free version
  //this is one way to test if we're using the free API or not
  //kind of like testing if a stove is hot by putting your face directly on it
});
