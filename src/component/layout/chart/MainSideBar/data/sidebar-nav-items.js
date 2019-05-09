export default function() {
    return [
      {
        index:1,
        title: "Blog Dashboard",
        to: "/blog-overview",
        htmlBefore: '<i class="material-icons">edit</i>',
        htmlAfter: ""
      },
      {
        index:2,
        title: "Blog Posts",
        htmlBefore: '<i class="material-icons">vertical_split</i>',
        to: "/blog-posts",
      },
      {
        index:3,
        title: "Add New Post",
        htmlBefore: '<i class="material-icons">note_add</i>',
        to: "/add-new-post",
      },
      {
        index:4,
        title: "Forms & Components",
        htmlBefore: '<i class="material-icons">view_module</i>',
        to: "/components-overview",
      },
      {
        index:5,
        title: "Tables",
        htmlBefore: '<i class="material-icons">table_chart</i>',
        to: "/tables",
      },
      {
        index:6,
        title: "User Profile",
        htmlBefore: '<i class="material-icons">person</i>',
        to: "/user-profile-lite",
      },
      {
        index:7,
        title: "Errors",
        htmlBefore: '<i class="material-icons">error</i>',
        to: "/errors",
      }
    ];
  }
  