import {StyleSheet} from 'react-native';

const OrderListStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  header: {
    width: '100%',
    height: 65,
    backgroundColor: '#fa8072'
  },
  bar: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f0ffff',
    textAlign: 'center',
    margin: 30,
  },
  name: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  owner: {
    textAlign: 'center',
    color: '#333333',
    fontSize: 20
  },
  loading: {
    margin: 50
  }
});
export {OrderListStyle};
