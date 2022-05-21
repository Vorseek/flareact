import * as prismic from "@prismicio/client";

// Fill in your repository name
export const repositoryName = "vorseek";

export const client = prismic.createClient(repositoryName, {
  // If your repository is private, add an access token
  accessToken:
    "MC5Zb2tHVWhNQUFDTUFvWEpJ.77-977-9Vu-_ve-_vRoOQe-_ve-_ve-_vUcV77-977-9G--_ve-_vQVo77-9aDNhSu-_vQzvv73vv73vv70gDQ",

  // This defines how you will structure URL paths in your project.
  // Update the types to match the Custom Types in your project, and edit
  // the paths to match the routing in your project.
  //
  // If you are not using a router in your project, you can change this
  // to an empty array or remove the option entirely.
  routes: [
    {
      type: "main_page",
      path: "/",
    },
  ],
});
