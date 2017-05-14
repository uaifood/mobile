'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} = ReactNative;

import OrderDetails from '../OrderDetails/OrderDetails';
import OrderList from '../OrderList/OrderList';

var bellIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAA/RJREFUeAHtmk1IFVEUx++Z53saVpKpfUAfu0hISsJduCw1okWtyo8oB6zsA2pRtDCQWhQVWQrPJFJa1bYiWtU6EloYLQJrIfk0w9LU0XdPZ54Kunrv3rkzN+O8zdw393z8z2/uvTNzGSH4xwSYABNgAkyACTABJsAEmAATYAJMgAkwgf+KANiqJuXWt0vEy5Q/kUWD5wDcKkv2XctiF0q3E0rUHIKiwPNklg2OHymxYJtDVPMm1gABiB4avpitJN8GBDzKZhdWv7Up5heEra35I+l03G/L9O+rQuIVvy0cuOnE1tzwm6Wx2Cx0dMz4bRu/PBtJF3MuFJ4pftht8GgqZboAwSvr7JxYtLN5tDbFbBatktvKFMNL9YWj42KvBCxHhJ0wf9xDk654XjyM0bl+6hug4yeHjiVF4j3c7ptUKc6EbWSAkKodbTlRLdPpRgF4BFGsVimAFvUJWq6fO7HYk5Kux2+ByKn469qGDghdN54SU+eomrMCcbuu0GV+AIMk/EGZWHUfksnZZX2G/4QKaKS5vjoN2Elrb7lh3fPhQAzEEE6Xdve9DSU+BQ0F0PjFk8XTk949mlb1YQlfGpemW19BYeJC0d2esaXnTbSNA/p55uQ2b3bmNa0xO0wIzDUGrVGfE/H8/ese9nzN1ScXO6OAhlsaKsScfEXrzeZckpu2oWKGRJ5Ts6Gr96Op2Maeg1ItTftEWr6zBccHkslNGjJaDBEyMoLG3IatnsAPdJdab0hXsDAAPxICKouTvd+CBaK3nqABsK0t4SE++2fg+AXRhfI1+dqC1hcYUGroyx1SVBVUiHl/rJrXFixyoCmWam6okUK+DCYhXG9HOLVl3b2vdLMEGkEIsl03cVR+QTVqAxp2jx+mZ53KqArVzeNr9LXq+msB8l886cXxum7SyP1Ia0azRmItQCNu4wHa3KrQyGfFxdfqa9ZJrgWIEh7SSWbTR1ezHiAQdTaL1clNi4KWZmVA392mXfQgtkVHpFUf0pzRrihCGZADc7WKOf4Zcx3tyoAkOpFuY5ikq6NdGRAIudGk6Chj6WhXBkR7CpuiLMpoLg3t6oAAVuwIEhra1QEhlhq9qlEG09CuDIh27WJR1mQyl452ZUA0TAdNio40loZ25Y8X4nHn4OycPAYS8yMtLmAydGAmnuc8DRiG3ZmAIgHlLddfrlsyLabrpIOBN8QVtQYydyR4BaLgxdpkclQlkPIaNIV/3tDdYLdIq6SxbyvpCXcKpvpJidIuqM5dbOU+KAr1twDlEUQfVB6l73tO0QVZUVOMPtPwbH4Man8OsQImwASYABNgAkyACTABJsAEmAATYAJMgAkwASZggMBfP5ImBMR1N8IAAAAASUVORK5CYII='

var addIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAAu5JREFUeAHtm0FrE1EQx2deqx6kJzFBvUgp4kF6FcGzJz+AoAn0YONNQQseI3gQVFC8NNWLiX4Jz4r2WsSTlh6kdVMEQbyUJs95yEII3c4kIft25b+XZOc/b97Mbyeb5T2WCAcIgAAIgAAIgAAIgAAIgMDoBHj0IdMZ0V2uX/bUvxKiM7l3lbX2++nMNFrU6IB8s+m6218feU8rg6kz0+PK6YX73Gz2B+15f3d5Tzg83+7Ot6VhOMEn2II27J/3eVRA0j2zAuJBVtFBCz5Zeh72qIB+bm8teO/PZBUatOCTpedhjwqoR/vntSItPlqMSfSogMjznJq8xUcNMr5DXEDj553bSABSUAMQACkEFBkdBEAKAUVGBwGQQkCR0UEApBBQZHQQACkEFBkdBEAKAUVGBwGQQkCRR9rVSBr1S7KafleW1BfJ07wnmlHiF0KWInuyl7QpG0obxPy02mp/tCZmBtRt3HjW79Nta+Ai+zlHzyutN3csOZoAJcv1hvf9VUvAsvgwu1vVtXZLy9d0k/bkl7RAZdOtNZkAMflzZQOg5WutyQRIbm7r2oTl02012QA591AA7JUPQmbGe/SvpkyHVDABqq6+/sAz7hoz/0gHlvUz1BBqCTVZajD9i6WB/L3a8e5vui7PQIvyLDQvG3+T7ZsznZLt5Qtp/IM+paDPMt/OQZrZxn5fbhOb8iy0UZmjt/yk88c6diRA1qBWv+RmrSb/Ju3D/Jm4Xn3Z6RzmM03N9BObZgJFjw1AyhUCIABSCCgyOgiAFAKKjA4CIIWAIqODAEghoMjoIABSCCgyOgiAFAKKjA4CIIWAIsftIHaJkp8sBBp81CDjO0QFNHvsyBctdYuPFmMSPSqgEy9efZc1309ZBQQt+GTpedijAgoFyhbwioDoDRcbbEEbtud9Hh1QeHmXHV2VxflfafHhe7AV4cVeuVDFOOTVy6O7ydbFkM3J6tl1eZn3f9qoLAZkZAECIAACIAACIDBI4C97G50niyBCCwAAAABJRU5ErkJggg=='

var listIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAABYBJREFUeAHtm29oHEUUwOfNXpomIdpAu1fSb6FYLGixmPoHlYpFRCpCwYh/7ppEeknVs8aqCFYI6AerWKoRk17650xKPzSgCE0JYv2iYFEoaFUQ2nwRQ+4uJYESNTl3nm8LyyXXeXt3H3q7zc1+2Z333sy8+e3c7MybOSHMZQgYAoaAIWAIGAKGgCFgCBgChoAhUG0CUE6FmcTuR4VQfShEuxDYKBAmAXDMbo0chP70v+WUcbPa+ALCZLI+szD3ASAmCY7GFn4TYD2zPpW+eLMCKOW3ptGFLJlE7BAi9hUk1z8BwPSqRuv2lsPpueu1BUn2xc716Kj9AtU26oFrCpoAnkCgQJwUEibsoZFhagO9f/3FAsr1xO5WCs9TTkuftSCVII7aqZN7CpLlT9ne+F1Kqa/JrbXLNcGnCM6EveOJndDR4ei8kTqhK3MUvlEOHNcWBXRfTXatc5+LLzx92kKFJ8IIx/WVfiGPZc+d2Vfst5dmAVHXesAzKnWnSuT8onO/zi7zzdnNpN+i04VGpvBZzhcWEPWein4OUqDWXoLaxFUeGjkg6yMLiHrQbCUNIKBae0BrspJyArGlaQtXLwtIAPzAZdLJZV3deZ18rai7CAIu6XShkQF+wfnCApICPuEyFcvpSzC27tPjU8VyNw2pVB6kfIGe5nX6wGUgfrLrW97n/GA/826G6T2xozTOU+P4C0DMQiSy2f4sPc1bCZF7KX6byuMB+prdQ2Xe6mdbFR3AZXppE3ZrG60G+he5On0B5d7sbnbm8sP0LXxaWwDAn9KynrMH099p9StA6AvIa1+mJ/68UDQLFmILDcY0pIgZEHKs3mp6e83goHZw9vLW1B0TiboryeQtNdVo01hDwBC4kQTKGqTdBWfm3Ph2idiOQjWChMmGush488CJ3I10LgxllwSU29u9STmLpxDF1mUOA/xNc6D90SOjQ8vkKyzhCyjX27ndUc44zYMauXYTpM+jqZOdnH6p3A2ageO0KyWCDZhJCpApNWlviFwoFTJmAWFfX0N2Pvcr9Zy2pY3UPYMld0WHRr7U6VwZ9vevyk1dPkhhj33X5lGcYbXlAFkK9nXZR0bPclWza7Hs/JXXy4FzrWCFA+44xVWSnbr0nkJ8NVRwXGcRbXppX2X2xu/kfGcBUex4F5epWE6VbKCo3LZiuZu+2huzaf31mk4XBhl1ggiFT9/lfOEBgdjIZdLKFWrt/0HcSj2H7V3asqouBO3Ldd3gAVXdyXBWyANCUVmQS+qDYg0AF+hLoN0xCA8S/JHzhQcEko2yFRdGAbO/7Ed2aitpHhrN0ur/UHGesKRpmvKfsOQ7nD8sIFus/ogys7HaZQVKSHL7Sq6d3brxgAQ4TD2JhqMQXfSZp5f7ZHRw5BfOK3Ye5GYoa6IoIB0dHu3iKlgqX1ETRa9hZqnhkfC51/Ji1QeLURkChkCVCdRi0N73M+/xr+VtH19AZuPQ3QT0uaYTsWMUM+n2MaEzDjW69ZxLxB92UH3rB8fTuYcXoqnRDi9dfM/27H6IjuBR1A6binWBp+nwQrS+5UEYGFjQ+cKuxZTAV3QZdDIKmD2Ve7m7Vauj3VhU6lgo4bgOo2jPLsy+pfPdlbGA6Kd1H5dJJ1f5/L06+YzI30FHSrXBNJ19IDIENnrKAqJld0slztJgprVHcNoqKScQW0DWRxYQNXimEmeVktpNRIXyj0rKCcQWgfWRBUQ96PtynaVBWjWtltoje9Edj/9O+p/LLSsQOwmnuHpZQJaED6kXlRUqpYPrx7ltaDeQRlvVXe6ZIs6JIOX08iYoGvox54PvPMj8FaHERNH8maUEIK/b1fLfoTwG5m4IGAKGgCFgCBgChoAhYAgYAoaAIVA9Av8DrzISjzKyfyIAAAAASUVORK5CYII='

var userIcon ='data:image/png;base64,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';

class TabBar extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    selectedTab: 'orderTab',
  };

  _renderContent = (color: string, pageText: string, num?: number) => {
    return (
      <View style={[styles.tabContent, {backgroundColor: color}]}>
        <Text style={styles.tabText}>{pageText}</Text>
        <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
      </View>
    );
  };

  render() {
    return (
      <TabBarIOS
        unselectedTintColor="#999999"
        tintColor="#E8655C">
        <TabBarIOS.Item
          title="PEDIDOS"
          icon={{uri: listIcon, scale: 3}}
          selected={this.state.selectedTab === 'orderTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'orderTab',
            });
          }}>
          <OrderList navigation = {this.props.navigation}/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="ADICIONAR"
          icon={{uri: addIcon, scale: 3}}
          selected={this.state.selectedTab === 'addTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'addTab',
            });
          }}>
          {this._renderContent('#783E33', 'Red Tab', this.state.notifCount)}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="RESTAURANTES"
          icon={{uri: bellIcon, scale: 3}}
          selected={this.state.selectedTab === 'restaurantsTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'restaurantsTab',
            });
          }}>
          {this._renderContent('#21551C', 'Green Tab', this.state.presses)}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="PERFIL"
          icon={{uri: userIcon, scale: 3}}
          selected={this.state.selectedTab === 'profileTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'profileTab',
            });
          }}>
          {this._renderContent('#21551C', 'Green Tab', this.state.presses)}
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'yellow',
    margin: 50,
  },
});

module.exports = TabBar;
