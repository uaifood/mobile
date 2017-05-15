import {StyleSheet} from 'react-native';

const LoadingOrderRowStyle = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
    width: '100%',
  },
  greyLine: {
    backgroundColor: "#D8D8D8",
    height: 16,
    width: '100%',
    marginBottom: 10,
  },
  greyCircle: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 25,
    backgroundColor: "#D8D8D8"
  },
  owner: {
    fontSize: 14,
    paddingTop: 5,
    paddingBottom: 5,
    width: '80%' //FIXME
  },
  restaurant: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});
export {LoadingOrderRowStyle};
