Class({
  id: "all",
  get: function() {
    return { users: load('user'), projects: load('project'), tasks: load('task'), watches: load('watch') }
  }
});