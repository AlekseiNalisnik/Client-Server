const getData = (data, count) => {
   return data.slice(0, count);
};

// TODO функция c двумя параметрами getUsers(data, firstName)
const getUsers = (data, firstName) => {
    return data.filter((item) => (firstName == item.firstName));
};

module.exports = {
    getData, getUsers
};
