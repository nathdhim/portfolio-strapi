
module.exports = () => ({
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        cases: {
          field: "slug",
          references: "title",
        },
      },
    },
  },
});