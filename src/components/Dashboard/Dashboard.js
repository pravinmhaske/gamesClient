import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import AppBarMenu from '../../containers/AppBarMenu/AppBarMenu';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {Responsive, WidthProvider} from 'react-grid-layout';
const ResponsiveReactGridLayout = WidthProvider(Responsive);;
import {onLayoutChange} from '../../actions/dashboard';
import Activity from '../../components/Activity/Activity';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import  '../../../static/images/grid-list/vegetables-790022_640.jpg';
import  '../../../static/images/grid-list/burger-827309_640.jpg';
import  '../../../static/images/grid-list/camera-813814_640.jpg';
import  '../../../static/images/grid-list/morning-819362_640.jpg';
import  '../../../static/images/grid-list/hats-829509_640.jpg';
import  '../../../static/images/grid-list/honey-823614_640.jpg';
import  '../../../static/images/grid-list/vegetables-790022_640.jpg';
import  '../../../static/images/grid-list/water-plant-821293_640.jpg';
import  '../../../static/images/semesnica.jpg';
import  '../../../static/images/bih.png';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 500,
    overflowY: 'auto',
    marginBottom: 24,
  },
  paper:{
    height: 100,
    width: 100,
    margin: 5,
    textAlign: 'center',
    display: 'inline-block',
  }
};


let layoutToSave=undefined;

class Dashboard extends Component{

  constructor(props) {
    super(props)
  };

  render(){

    function handleLayoutChange(layout){
      layoutToSave=layout;
    };

    const { messages, browser, dashboard, onLayoutChange} = this.props

    var layout = [
      {i: '1', x: 0, y: 0, w: 4, h: 4.2,isResizable:false},
      {i: '2', x: 0, y: 0, w: 3, h: 1},
      {i: '3', x: 4, y: 0, w: 3, h: 3},
      {i: '4', x: 4, y: 0, w: 3, h: 2}
    ];


    var layouts = dashboard.layout?{lg:dashboard.layout}:{lg:layout}

    const menuItems=[
      {	key: 'save',
        text:messages.save||'save',
        onTouchTap: ()=>onLayoutChange(layoutToSave)
      },
      {
        key: 'reset',
        text:messages.reset||'reset',
        onTouchTap: ()=>onLayoutChange(undefined)
      }

    ];

    const tilesData = [
      {
        img: 'static/vegetables-790022_640.jpg',
        title: 'Breakfast',
        author: 'jill111',
      },
      {
        img: 'static/burger-827309_640.jpg',
        title: 'Tasty burger',
        author: 'pashminu',
      },
      {
        img: 'static/camera-813814_640.jpg',
        title: 'Camera',
        author: 'Danson67',
      },
      {
        img: 'static/morning-819362_640.jpg',
        title: 'Morning',
        author: 'fancycrave1',
      },
      {
        img: 'static/hats-829509_640.jpg',
        title: 'Hats',
        author: 'Hans',
      },
      {
        img: 'static/honey-823614_640.jpg',
        title: 'Honey',
        author: 'fancycravel',
      },
      {
        img: 'static/water-plant-821293_640.jpg',
        title: 'Water plant',
        author: 'BkrmadtyaKarki',
      },
    ];


    return (

      <Activity title={messages.dashboard}  menu={<AppBarMenu items={menuItems}/>} >
        <div>
          <ResponsiveReactGridLayout
            isDraggable={browser.greaterThan.medium}
            isResizable={browser.greaterThan.medium}
            onLayoutChange={handleLayoutChange}
            className="layout"
            layouts={layouts}
            autoSize={true}
            breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
            cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
            ref="grid"
            >

            <Card key={"1"}>
              <CardHeader
                title="URL Avatar"
                subtitle="Semesnica"
                avatar="static/bih.png"
                />
              <CardMedia
                overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                >
                <img src="static/semesnica.jpg" />
              </CardMedia>
              <CardTitle title="Semesnica" subtitle="A beutiful place in Bosnia and Herzegovina" />
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
              </CardText>
              <CardActions>
                <FlatButton label="Action1" />
                <FlatButton label="Action2" />
              </CardActions>
            </Card>

            <GridList key={"3"}
              cellHeight={200}
              style={styles.gridList}
              >
              <Subheader>December</Subheader>
              {tilesData.map((tile) => (
                <GridTile
                  key={tile.img}
                  title={tile.title}
                  subtitle={<span>by <b>{tile.author}</b></span>}
                  actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                  >
                  <img src={tile.img} />
                </GridTile>
              ))}
            </GridList>

            <Card key={"4"}>
              <CardHeader
                title="Without Avatar"
                subtitle="Subtitle"
                actAsExpander={true}
                showExpandableButton={true}
                />
              <CardText expandable={true}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
              </CardText>
              <CardActions expandable={true}>
                <FlatButton label="Action1" />
                <FlatButton label="Action2" />
              </CardActions>
            </Card>

            <Paper key={"2"} style={styles.paper}  />

          </ResponsiveReactGridLayout>
        </div>
      </Activity>

    );
  }
};


Dashboard.propTypes = {
  onLayoutChange: PropTypes.func.isRequired,
  dashboard: PropTypes.object.isRequired,
  messages: PropTypes.object.isRequired,
  browser: PropTypes.object.isRequired,
}


export default (Dashboard);
