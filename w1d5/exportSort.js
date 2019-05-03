var sortedList = [];

function sortAscending (array) {
  array.sort(function(a, b){return a-b});
  return array;
}

module.exports =
{
  list :function listInput () {
    sortedList.push(Math.floor(Math.random() * 100));
  },

  sorted : function(){
    return sortAscending(sortedList);
  }
};
