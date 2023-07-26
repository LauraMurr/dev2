export const aboutController = {
  index(request, response) {
    const viewData = {
      title: "About this weather app",
    };
    console.log("about rendering");
    response.render("about-view", viewData);
  },
};
