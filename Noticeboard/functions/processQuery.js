module.exports = (query) => {
  const result = {};
  if (query.notice) {
    result.notice = { $regex: query.notice, $options: "i" };
  }
  if (query.price) {
    result.price = { $lte: query.price };
  }

  if (query.user) {
    result.user = query.user;
  }

  if (query.category) {
    result.categories = { $in: query.category };
  }

  if (query.date) {
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    const day = new Date().getDay();

    switch (query.date) {
      case "today":
        result.year = year;
        result.month = month;
        result.day = day;
        break;

      case "month":
        result.year = year;
        result.month = month;
        break;

      case "year":
        result.year = year;
        break;
    }
  }
  return result;
};
