import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown-now';
import {Link} from 'react-router-dom';
import '../css/seatpicker.css';

class Seathover extends React.Component {
    constructor(props) {
        super();
        this.state = {
            bgColor: '#4aa7f5', prevdisable: false, disable: false, msg : 'This seat is available', movieHall: null
        }
        this.addFlyout = this.addFlyout.bind(this);
        this.toggleSelected = this.toggleSelected.bind(this);
    }
    addFlyout = () => {
        this.props.onHover(this.props.index);
    }
    toggleSelected = (index) => {
        if(!this.state.disable) {
            this.props.toggleSelected(this.props.index);
            this.setState({
                bgColor : '#f15500'==this.state.bgColor?(this.props.booked==2?'#085aa4':'#4aa7f5'):'#f15500', msg : ("You Selected this seat"==this.state.msg)?"This seat is available":"You Selected this seat"
            })
        }
    }

    componentWillMount() {
        if(this.props.booked==1) {
            this.setState({
                bgColor: '#DDDDDD', msg: 'This seat is not available', disable: true, prevdisable: true
            })
        }
        if(this.props.booked==2) {
            this.setState({
                bgColor: '#085aa4', msg: 'This seat is available', disable: false, prevdisable: false
            })
        }
    }

    componentWillReceiveProps() {
        console.log("will mount");
        if(this.props.disabling && (!this.props.selected.includes(this.props.index))) {
            this.setState({
                disable: true
            })
        }
        else {
            this.setState({
                disable: this.state.prevdisable
            })
        }
    }
    render() {
        const styleFlyout = {
            display: "block",
            left: "392.288px",
            position: 'absolute',
            top: '326.087px',
            zIndex: '3000'
        }

        let bgStyle = {};
        bgStyle['backgroundColor'] = this.state.bgColor;
        let hoverBox = null;
        if(this.props.hover==this.props.index) {
            var rect = ReactDOM.findDOMNode(this.refs.flyout).getBoundingClientRect()
            styleFlyout.left = -28;//rect.left - 20 - 5;
            styleFlyout.top = -92;//rect.top - (rect.height + 8);
            console.log("rect", rect);
            console.log("style", styleFlyout);
            if(!this.state.disable) bgStyle['backgroundColor'] = '#f15500'
            hoverBox = ( 
                    <div id="flyoutContainer" style={styleFlyout} className="seatFlyout" >
                        <div id="flyoutContent">
                            <span className="flyoutSeat"><strong>Seat:  {this.props.index}<br/></strong></span>
                            <p>{this.state.msg}</p>
                        </div>
                        <div id="flyoutBoxTailLeft"></div>
                    </div>
            )
        }
        
        return (
            <div id={this.props.index} onMouseOver={this.addFlyout} ref="flyout" style={bgStyle} onClick={this.toggleSelected}>
                {hoverBox}
            </div>
        );
    }
}

export default class seatpicker extends React.Component {
    constructor(props) {
        super();

        this.state = {
             selected: [], hover: "" , convenienceFlyout: false, disable: false
        }

        this.onHover = this.onHover.bind(this);
        this.drawCanvas = this.drawCanvas.bind(this);
        this.toggleConvenienceFlyout = this.toggleConvenienceFlyout.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        this.setState({
            prevState: JSON.parse(localStorage.getItem('ticketBoxOfficeState')),
            movieHall: JSON.parse(localStorage.getItem('movieHall'))
        })
    }
    
    componentDidMount() {
            let ctx = ReactDOM.findDOMNode(this.refs.map).getContext('2d');
            console.log("ctx",ctx);
            this.drawCanvas(ctx);
            ReactDOM.findDOMNode(this.refs.mapZoom).style.display='none';
    }

    drawCanvas = function (ctx) {
        ctx.fillStyle = '#686869';
        ctx.beginPath();ctx.moveTo(1535.895, 225.279);ctx.bezierCurveTo(1381.325, 191.595, 1108.379, 143.849, 803.114, 143.849);
        ctx.bezierCurveTo(493.819, 143.849, 219.864, 192.409, 68.08002, 225.792);ctx.lineTo(68.17602, 173.776);
        ctx.bezierCurveTo(219.891, 140.383, 493.655, 91.881, 803.117, 91.881);
        ctx.bezierCurveTo(1108.34, 91.881, 1381.18, 139.615, 1535.793, 173.312);ctx.lineTo(1535.895, 225.279);
        ctx.closePath();ctx.fill();ctx.fillStyle = '#FFFFFF';ctx.beginPath();ctx.moveTo(730.654, 120.847);
        ctx.lineTo(735.031, 120.399);ctx.bezierCurveTo(735.281, 121.924, 735.822, 123.037, 736.625, 123.761);
        ctx.bezierCurveTo(737.418, 124.479, 738.509, 124.84, 739.886, 124.84);
        ctx.bezierCurveTo(741.365, 124.84, 742.425, 124.517, 743.199, 123.886);
        ctx.bezierCurveTo(743.922, 123.254, 744.295, 122.511, 744.295, 121.657);
        ctx.bezierCurveTo(744.295, 121.115, 744.149, 120.651, 743.834, 120.245);ctx.bezierCurveTo(743.521, 119.869, 742.996, 119.549, 742.228, 119.249);ctx.bezierCurveTo(741.705, 119.075, 740.467, 118.728, 738.627, 118.253);ctx.bezierCurveTo(736.217, 117.629, 734.545, 116.856, 733.549, 115.965);ctx.bezierCurveTo(732.178, 114.684, 731.517, 113.137, 731.517, 111.319);ctx.bezierCurveTo(731.517, 110.14, 731.83, 109.041, 732.4739, 108.01);ctx.bezierCurveTo(733.0989, 106.994, 734.0529, 106.22, 735.2579, 105.687);ctx.bezierCurveTo(736.4589, 105.147, 737.9279, 104.886, 739.619, 104.886);ctx.bezierCurveTo(742.4319, 104.886, 744.5079, 105.521, 745.9319, 106.784);ctx.bezierCurveTo(747.343, 108.055, 748.098, 109.754, 748.184, 111.872);ctx.lineTo(743.6689, 112.088);ctx.bezierCurveTo(743.45, 110.9, 743.0439, 110.044, 742.423, 109.526);ctx.bezierCurveTo(741.7859, 109.005, 740.839, 108.754, 739.577, 108.754);ctx.bezierCurveTo(738.264, 108.754, 737.243, 109.023, 736.514, 109.582);ctx.bezierCurveTo(736.035, 109.946, 735.785, 110.422, 735.785, 111.026);ctx.bezierCurveTo(735.785, 111.56, 736.014, 112.036, 736.457, 112.418);ctx.bezierCurveTo(737.029, 112.916, 738.418, 113.431, 740.615, 113.96);ctx.bezierCurveTo(742.763, 114.502, 744.406, 115.044, 745.457, 115.618);ctx.bezierCurveTo(746.502, 116.206, 747.326, 116.966, 747.918, 117.966);ctx.bezierCurveTo(748.508, 118.966, 748.81, 120.181, 748.81, 121.649);ctx.bezierCurveTo(748.81, 122.962, 748.435, 124.195, 747.747, 125.347);ctx.bezierCurveTo(747.028, 126.508, 746.036, 127.372, 744.726, 127.933);ctx.bezierCurveTo(743.431, 128.477, 741.804, 128.765, 739.888, 128.765);ctx.bezierCurveTo(737.06, 128.765, 734.909, 128.084, 733.39, 126.733);ctx.bezierCurveTo(731.85, 125.388, 730.945, 123.424, 730.654, 120.847);ctx.closePath();ctx.fill();ctx.fillStyle = '#FFFFFF';ctx.beginPath();ctx.moveTo(766.818, 119.869);ctx.lineTo(771.172, 121.315);ctx.bezierCurveTo(770.512, 123.836, 769.401, 125.714, 767.838, 126.933);ctx.bezierCurveTo(766.286, 128.155, 764.319, 128.771, 761.928, 128.771);ctx.bezierCurveTo(758.975, 128.771, 756.538, 127.707, 754.637, 125.626);ctx.bezierCurveTo(752.725, 123.546, 751.783, 120.674, 751.783, 117.059);ctx.bezierCurveTo(751.783, 113.216, 752.73, 110.227, 754.652, 108.113);ctx.bezierCurveTo(756.5681, 105.983, 759.103, 104.917, 762.197, 104.917);ctx.bezierCurveTo(764.926, 104.917, 767.135, 105.739, 768.855, 107.417);ctx.bezierCurveTo(769.8751, 108.399, 770.626, 109.827, 771.126, 111.671);ctx.lineTo(766.688, 112.762);ctx.bezierCurveTo(766.4171, 111.564, 765.8751, 110.621, 765.04, 109.936);ctx.bezierCurveTo(764.202, 109.236, 763.1671, 108.9, 761.973, 108.9);ctx.bezierCurveTo(760.307, 108.9, 759.001, 109.518, 757.973, 110.738);ctx.bezierCurveTo(756.952, 111.967, 756.428, 113.95, 756.428, 116.702);ctx.bezierCurveTo(756.428, 119.622, 756.9481, 121.698, 757.949, 122.936);ctx.bezierCurveTo(758.9611, 124.175, 760.2971, 124.79, 761.887, 124.79);ctx.bezierCurveTo(763.084, 124.79, 764.129, 124.396, 765, 123.599);ctx.bezierCurveTo(765.794, 122.8, 766.414, 121.552, 766.818, 119.869);ctx.closePath();ctx.fill();ctx.fillStyle = '#FFFFFF';ctx.beginPath();ctx.moveTo(775.035, 128.367);ctx.lineTo(775.035, 105.291);ctx.lineTo(784.507, 105.291);ctx.bezierCurveTo(786.903, 105.291, 788.613, 105.503, 789.6849, 105.905);ctx.bezierCurveTo(790.7889, 106.319, 791.6379, 107.071, 792.291, 108.121);ctx.bezierCurveTo(792.9349, 109.187, 793.23, 110.397, 793.23, 111.755);ctx.bezierCurveTo(793.23, 113.482, 792.781, 114.919, 791.777, 116.049);ctx.bezierCurveTo(790.795, 117.192, 789.332, 117.887, 787.367, 118.182);ctx.bezierCurveTo(788.346, 118.764, 789.132, 119.423, 789.752, 120.121);ctx.bezierCurveTo(790.392, 120.833, 791.236, 122.079, 792.3, 123.861);ctx.lineTo(795.029, 128.363);ctx.lineTo(789.648, 128.363);ctx.lineTo(786.398, 123.353);ctx.bezierCurveTo(785.246, 121.55, 784.421, 120.422, 784.009, 119.941);ctx.bezierCurveTo(783.5681, 119.479, 783.1541, 119.155, 782.655, 118.975);ctx.bezierCurveTo(782.184, 118.8, 781.42, 118.706, 780.372, 118.706);ctx.lineTo(779.461, 118.706);ctx.lineTo(779.461, 128.338);ctx.lineTo(775.035, 128.367);ctx.lineTo(775.035, 128.367);ctx.closePath();ctx.moveTo(779.533, 115.039);ctx.lineTo(782.863, 115.039);ctx.bezierCurveTo(785.009, 115.039, 786.363, 114.941, 786.8961, 114.764);ctx.bezierCurveTo(787.4391, 114.577, 787.855, 114.251, 788.1671, 113.774);ctx.bezierCurveTo(788.47, 113.322, 788.6191, 112.738, 788.6191, 112.036);ctx.bezierCurveTo(788.6191, 111.266, 788.4191, 110.636, 788.0151, 110.156);ctx.bezierCurveTo(787.6401, 109.677, 787.0351, 109.378, 786.3241, 109.254);ctx.bezierCurveTo(785.9701, 109.204, 784.8651, 109.176, 783.0411, 109.176);ctx.lineTo(779.537, 109.176);ctx.lineTo(779.537, 115.042);ctx.lineTo(779.533, 115.039);ctx.lineTo(779.533, 115.039);ctx.closePath();ctx.fill();ctx.fillStyle = '#FFFFFF';ctx.beginPath();ctx.moveTo(797.488, 128.367);ctx.lineTo(797.488, 105.291);ctx.lineTo(814.021, 105.291);ctx.lineTo(814.021, 109.193);ctx.lineTo(801.997, 109.193);ctx.lineTo(801.997, 114.298);ctx.lineTo(813.176, 114.298);ctx.lineTo(813.176, 118.198);ctx.lineTo(801.997, 118.198);ctx.lineTo(801.997, 124.484);ctx.lineTo(814.458, 124.484);ctx.lineTo(814.458, 128.366);ctx.lineTo(797.488, 128.367);ctx.lineTo(797.488, 128.367);ctx.closePath();ctx.fill();ctx.fillStyle = '#FFFFFF';ctx.beginPath();ctx.moveTo(818.242, 128.367);ctx.lineTo(818.242, 105.291);ctx.lineTo(834.763, 105.291);ctx.lineTo(834.763, 109.193);ctx.lineTo(822.75, 109.193);ctx.lineTo(822.75, 114.298);ctx.lineTo(833.938, 114.298);ctx.lineTo(833.938, 118.198);ctx.lineTo(822.75, 118.198);ctx.lineTo(822.75, 124.484);ctx.lineTo(835.188, 124.484);ctx.lineTo(835.188, 128.366);ctx.lineTo(818.242, 128.367);ctx.lineTo(818.242, 128.367);ctx.closePath();ctx.fill();ctx.fillStyle = '#FFFFFF';ctx.beginPath();ctx.moveTo(839.07, 128.367);ctx.lineTo(839.07, 105.291);ctx.lineTo(843.447, 105.291);ctx.lineTo(852.551, 120.699);ctx.lineTo(852.551, 105.291);ctx.lineTo(856.758, 105.291);ctx.lineTo(856.758, 128.361);ctx.lineTo(852.224, 128.361);ctx.lineTo(843.224, 113.311);ctx.lineTo(843.224, 128.361);ctx.lineTo(839.07, 128.367);ctx.lineTo(839.07, 128.367);ctx.closePath();ctx.fill();ctx.fillStyle = '#686869';ctx.beginPath();ctx.moveTo(673.704, 221.786);ctx.lineTo(685.319, 221.786);ctx.lineTo(685.319, 224.122);ctx.lineTo(676.488, 224.122);ctx.lineTo(676.488, 231.289);ctx.lineTo(684.646, 231.289);ctx.lineTo(684.646, 233.593);ctx.lineTo(676.488, 233.593);ctx.lineTo(676.488, 243.353);ctx.lineTo(673.704, 243.353);ctx.lineTo(673.704, 221.786);ctx.closePath();ctx.fill();ctx.fillStyle = '#686869';ctx.beginPath();ctx.moveTo(689.288, 222.074);ctx.bezierCurveTo(690.696, 221.786, 692.712, 221.626, 694.632, 221.626);ctx.bezierCurveTo(697.611, 221.626, 699.528, 222.17, 700.872, 223.386);ctx.bezierCurveTo(701.96, 224.346, 702.568, 225.818, 702.568, 227.482);ctx.bezierCurveTo(702.568, 230.33, 700.776, 232.218, 698.504, 232.986);ctx.lineTo(698.504, 233.082);ctx.bezierCurveTo(700.168, 233.658, 701.16, 235.194, 701.672, 237.434);ctx.bezierCurveTo(702.376, 240.442, 702.888, 242.522, 703.336, 243.354);ctx.lineTo(700.456, 243.354);ctx.bezierCurveTo(700.102, 242.746, 699.624, 240.89, 699.016, 238.203);ctx.bezierCurveTo(698.376, 235.227, 697.224, 234.107, 694.703, 234.011);ctx.lineTo(692.079, 234.011);ctx.lineTo(692.079, 243.355);ctx.lineTo(689.295, 243.355);ctx.lineTo(689.288, 222.074);ctx.lineTo(689.288, 222.074);ctx.closePath();ctx.moveTo(692.072, 231.897);ctx.lineTo(694.92, 231.897);ctx.bezierCurveTo(697.899, 231.897, 699.7841, 230.265, 699.7841, 227.801);ctx.bezierCurveTo(699.7841, 225.017, 697.7631, 223.801, 694.824, 223.769);ctx.bezierCurveTo(693.48, 223.769, 692.519, 223.897, 692.0731, 224.026);ctx.lineTo(692.072, 231.897);ctx.lineTo(692.072, 231.897);ctx.closePath();ctx.fill();ctx.fillStyle = '#686869';ctx.beginPath();ctx.moveTo(725.03, 232.346);ctx.bezierCurveTo(725.03, 239.769, 720.511, 243.704, 715.009, 243.704);ctx.bezierCurveTo(709.321, 243.704, 705.321, 239.289, 705.321, 232.762);ctx.bezierCurveTo(705.321, 225.914, 709.577, 221.435, 715.3361, 221.435);ctx.bezierCurveTo(721.222, 221.435, 725.03, 225.946, 725.03, 232.346);ctx.closePath();ctx.moveTo(708.295, 232.697);ctx.bezierCurveTo(708.295, 237.304, 710.791, 241.432, 715.174, 241.432);ctx.bezierCurveTo(719.59, 241.432, 722.086, 237.369, 722.086, 232.473);ctx.bezierCurveTo(722.086, 228.185, 719.846, 223.705, 715.206, 223.705);ctx.bezierCurveTo(710.599, 223.706, 708.295, 227.962, 708.295, 232.697);ctx.closePath();ctx.fill();ctx.fillStyle = '#686869';ctx.beginPath();ctx.moveTo(728.646, 243.353);ctx.lineTo(728.646, 221.787);ctx.lineTo(731.68, 221.787);ctx.lineTo(738.592, 232.698);ctx.bezierCurveTo(740.196, 235.226, 741.446, 237.498, 742.464, 239.706);ctx.lineTo(742.528, 239.674);ctx.bezierCurveTo(742.272, 236.794, 742.208, 234.17, 742.208, 230.811);ctx.lineTo(742.208, 221.788);ctx.lineTo(744.832, 221.788);ctx.lineTo(744.832, 243.354);ctx.lineTo(742.019, 243.354);ctx.lineTo(735.166, 232.411);ctx.bezierCurveTo(733.662, 230.012, 732.228, 227.548, 731.136, 225.212);ctx.lineTo(731.038, 225.244);ctx.bezierCurveTo(731.1979, 227.964, 731.265, 230.556, 731.265, 234.14);ctx.lineTo(731.265, 243.355);ctx.lineTo(728.64, 243.355);ctx.lineTo(728.64, 243.353);ctx.lineTo(728.646, 243.353);ctx.lineTo(728.646, 243.353);ctx.closePath();ctx.fill();ctx.fillStyle = '#686869';ctx.beginPath();ctx.moveTo(753.798, 224.154);ctx.lineTo(747.238, 224.154);ctx.lineTo(747.238, 221.786);ctx.lineTo(763.205, 221.786);ctx.lineTo(763.205, 224.154);ctx.lineTo(756.613, 224.154);ctx.lineTo(756.613, 243.352);ctx.lineTo(753.797, 243.352);ctx.lineTo(753.798, 224.154);ctx.lineTo(753.798, 224.154);ctx.closePath();ctx.fill();ctx.fillStyle = '#686869';ctx.beginPath();ctx.moveTo(790.821, 232.346);ctx.bezierCurveTo(790.821, 239.769, 786.302, 243.704, 780.8, 243.704);ctx.bezierCurveTo(775.112, 243.704, 771.112, 239.289, 771.112, 232.762);ctx.bezierCurveTo(771.112, 225.914, 775.368, 221.435, 781.127, 221.435);
        ctx.bezierCurveTo(787.013, 221.435, 790.821, 225.946, 790.821, 232.346);ctx.closePath();ctx.moveTo(774.086, 232.697);ctx.bezierCurveTo(774.086, 237.304, 776.582, 241.432, 780.965, 241.432);ctx.bezierCurveTo(785.381, 241.432, 787.877, 237.369, 787.877, 232.473);ctx.bezierCurveTo(787.877, 228.185, 785.637, 223.705, 780.997, 223.705);ctx.bezierCurveTo(776.39, 223.706, 774.086, 227.962, 774.086, 232.697);ctx.closePath();ctx.fill();ctx.fillStyle = '#686869';ctx.beginPath();ctx.moveTo(794.438, 221.786);ctx.lineTo(806.053, 221.786);ctx.lineTo(806.053, 224.122);ctx.lineTo(797.222, 224.122);ctx.lineTo(797.222, 231.289);ctx.lineTo(805.381, 231.289);ctx.lineTo(805.381, 233.593);ctx.lineTo(797.222, 233.593);ctx.lineTo(797.222, 243.353);ctx.lineTo(794.438, 243.353);ctx.lineTo(794.438, 221.786);ctx.closePath();ctx.fill();ctx.fillStyle = '#686869';ctx.beginPath();ctx.moveTo(819.59, 224.154);ctx.lineTo(813.03, 224.154);ctx.lineTo(813.03, 221.786);ctx.lineTo(828.998, 221.786);ctx.lineTo(828.998, 224.154);ctx.lineTo(822.4061, 224.154);ctx.lineTo(822.4061, 243.352);ctx.lineTo(819.5901, 243.352);ctx.lineTo(819.5901, 224.154);ctx.lineTo(819.59, 224.154);ctx.closePath();ctx.fill();ctx.fillStyle = '#686869';ctx.beginPath();ctx.moveTo(834.182, 221.786);ctx.lineTo(834.182, 230.809);ctx.lineTo(844.62, 230.809);ctx.lineTo(844.62, 221.786);ctx.lineTo(847.433, 221.786);ctx.lineTo(847.433, 243.352);ctx.lineTo(844.62, 243.352);ctx.lineTo(844.62, 233.241);ctx.lineTo(834.182, 233.241);ctx.lineTo(834.182, 243.352);ctx.lineTo(831.4, 243.352);ctx.lineTo(831.4, 221.786);ctx.lineTo(834.182, 221.786);ctx.closePath();ctx.fill();ctx.fillStyle = '#686869';ctx.beginPath();ctx.moveTo(863.43, 233.241);ctx.lineTo(855.046, 233.241);ctx.lineTo(855.046, 241.016);ctx.lineTo(864.389, 241.016);ctx.lineTo(864.389, 243.352);ctx.lineTo(852.262, 243.352);ctx.lineTo(852.262, 221.786);ctx.lineTo(863.909, 221.786);ctx.lineTo(863.909, 224.122);ctx.lineTo(855.046, 224.122);ctx.lineTo(855.046, 230.937);ctx.lineTo(863.43, 230.937);ctx.lineTo(863.43, 233.241);ctx.closePath();ctx.fill();ctx.fillStyle = '#686869';ctx.beginPath();ctx.moveTo(871.493, 236.569);ctx.lineTo(869.254, 243.352);ctx.lineTo(866.373, 243.352);ctx.lineTo(873.701, 221.786);ctx.lineTo(877.055, 221.786);ctx.lineTo(884.414, 243.352);ctx.lineTo(881.439, 243.352);ctx.lineTo(879.127, 236.569);ctx.lineTo(871.493, 236.569);ctx.closePath();ctx.moveTo(878.564, 234.394);ctx.lineTo(876.453, 228.186);ctx.bezierCurveTo(875.973, 226.778, 875.652, 225.498, 875.333, 224.25);ctx.lineTo(875.27, 224.25);ctx.bezierCurveTo(874.957, 225.53, 874.598, 226.842, 874.182, 228.153);ctx.lineTo(872.077, 234.393);ctx.lineTo(878.564, 234.394);ctx.lineTo(878.564, 234.394);ctx.closePath();ctx.fill();ctx.fillStyle = '#686869';ctx.beginPath();ctx.moveTo(889.221, 224.154);ctx.lineTo(882.662, 224.154);ctx.lineTo(882.662, 221.786);ctx.lineTo(898.629, 221.786);ctx.lineTo(898.629, 224.154);ctx.lineTo(892.037, 224.154);ctx.lineTo(892.037, 243.352);ctx.lineTo(889.221, 243.352);ctx.lineTo(889.221, 224.154);ctx.closePath();ctx.fill();ctx.fillStyle = '#686869';ctx.beginPath();ctx.moveTo(912.197, 233.241);ctx.lineTo(903.813, 233.241);ctx.lineTo(903.813, 241.016);ctx.lineTo(913.1561, 241.016);ctx.lineTo(913.1561, 243.352);ctx.lineTo(901.0291, 243.352);ctx.lineTo(901.0291, 221.786);ctx.lineTo(912.675, 221.786);ctx.lineTo(912.675, 224.122);ctx.lineTo(903.819, 224.122);ctx.lineTo(903.819, 230.937);ctx.lineTo(912.203, 230.937);ctx.lineTo(912.197, 233.241);ctx.lineTo(912.197, 233.241);ctx.closePath();ctx.fill();ctx.fillStyle = '#686869';ctx.beginPath();ctx.moveTo(916.773, 222.074);ctx.bezierCurveTo(918.174, 221.786, 920.197, 221.626, 922.117, 221.626);ctx.bezierCurveTo(925.092, 221.626, 927.012, 222.17, 928.356, 223.386);ctx.bezierCurveTo(929.444, 224.346, 930.045, 225.818, 930.045, 227.482);ctx.bezierCurveTo(930.045, 230.33, 928.252, 232.218, 925.9821, 232.986);ctx.lineTo(925.9821, 233.082);ctx.bezierCurveTo(927.6461, 233.658, 928.631, 235.194, 929.1501, 237.434);ctx.bezierCurveTo(929.8541, 240.442, 930.3661, 242.522, 930.8141, 243.354);ctx.lineTo(927.9321, 243.354);ctx.bezierCurveTo(927.5781, 242.746, 927.1021, 240.89, 926.4941, 238.203);ctx.bezierCurveTo(925.8541, 235.227, 924.7031, 234.107, 922.1751, 234.011);ctx.lineTo(919.5511, 234.011);ctx.lineTo(919.5511, 243.355);ctx.lineTo(916.7751, 243.355);ctx.lineTo(916.773, 222.074);ctx.lineTo(916.773, 222.074);ctx.closePath();ctx.moveTo(919.557, 231.897);ctx.lineTo(922.411, 231.897);ctx.bezierCurveTo(925.388, 231.897, 927.269, 230.265, 927.269, 227.801);ctx.bezierCurveTo(927.269, 225.017, 925.251, 223.801, 922.308, 223.769);ctx.bezierCurveTo(920.964, 223.769, 920.004, 223.897, 919.556, 224.026);ctx.lineTo(919.556, 231.897);ctx.lineTo(919.557, 231.897);ctx.closePath();ctx.fill();ctx.fillStyle = '#686869';ctx.beginPath();ctx.moveTo(682.634, 1541.42);ctx.bezierCurveTo(683.85, 1541.164, 685.77, 1540.972, 687.722, 1540.972);ctx.bezierCurveTo(690.504, 1540.972, 692.296, 1541.451, 693.641, 1542.54);ctx.bezierCurveTo(694.761, 1543.372, 695.433, 1544.649, 695.433, 1546.348);ctx.bezierCurveTo(695.433, 1548.428, 694.057, 1550.251, 691.787, 1551.083);ctx.lineTo(691.787, 1551.146);ctx.bezierCurveTo(693.835, 1551.658, 696.235, 1553.353, 696.235, 1556.548);ctx.bezierCurveTo(696.235, 1558.402, 695.499, 1559.816, 694.411, 1560.866);ctx.bezierCurveTo(692.907, 1562.241, 690.473, 1562.884, 686.955, 1562.884);ctx.bezierCurveTo(685.035, 1562.884, 683.559, 1562.756, 682.635, 1562.627);ctx.lineTo(682.634, 1541.42);ctx.lineTo(682.634, 1541.42);ctx.lineTo(682.634, 1541.42);ctx.closePath();ctx.moveTo(685.417, 1550.251);ctx.lineTo(687.945, 1550.251);ctx.bezierCurveTo(690.883, 1550.251, 692.616, 1548.715, 692.616, 1546.636);ctx.bezierCurveTo(692.616, 1544.113, 690.696, 1543.115, 687.88, 1543.115);ctx.bezierCurveTo(686.602, 1543.115, 685.864, 1543.212, 685.417, 1543.303);ctx.lineTo(685.417, 1550.251);ctx.closePath();ctx.moveTo(685.417, 1560.586);ctx.bezierCurveTo(685.961, 1560.684, 686.763, 1560.715, 687.752, 1560.715);ctx.bezierCurveTo(690.632, 1560.715, 693.288, 1559.658, 693.288, 1556.527);ctx.bezierCurveTo(693.288, 1553.586, 690.762, 1552.368, 687.723, 1552.368);ctx.lineTo(685.417, 1552.368);ctx.lineTo(685.417, 1560.586);ctx.lineTo(685.417, 1560.586);ctx.closePath();ctx.fill();ctx.fillStyle = '#686869';ctx.beginPath();ctx.moveTo(703.466, 1555.915);ctx.lineTo(701.227, 1562.696);ctx.lineTo(698.347, 1562.696);ctx.lineTo(705.673, 1541.132);ctx.lineTo(709.033, 1541.132);ctx.lineTo(716.387, 1562.696);ctx.lineTo(713.4089, 1562.696);ctx.lineTo(711.1019, 1555.915);ctx.lineTo(703.466, 1555.915);ctx.closePath();ctx.moveTo(710.536, 1553.739);ctx.lineTo(708.425, 1547.531);ctx.bezierCurveTo(707.946, 1546.125, 707.624, 1544.843, 707.306, 1543.593);ctx.lineTo(707.243, 1543.593);ctx.bezierCurveTo(706.923, 1544.873, 706.571, 1546.188, 706.155, 1547.495);ctx.lineTo(704.043, 1553.734);ctx.lineTo(710.536, 1553.739);ctx.lineTo(710.536, 1553.739);ctx.closePath();ctx.fill();ctx.fillStyle = '#686869';ctx.beginPath();ctx.moveTo(734.152, 1561.994);ctx.bezierCurveTo(733.128, 1562.506, 731.08, 1563.015, 728.456, 1563.015);ctx.bezierCurveTo(722.376, 1563.015, 717.803, 1559.175, 717.803, 1552.106);ctx.bezierCurveTo(717.803, 1545.354, 722.377, 1540.782, 729.071, 1540.782);ctx.bezierCurveTo(731.759, 1540.782, 733.455, 1541.352, 734.186, 1541.742);ctx.lineTo(733.514, 1544.013);ctx.bezierCurveTo(732.456, 1543.501, 730.952, 1543.117, 729.16, 1543.117);ctx.bezierCurveTo(724.099, 1543.117, 720.744, 1546.346, 720.744, 1552.013);ctx.bezierCurveTo(720.744, 1557.292, 723.7839, 1560.685, 729.032, 1560.685);ctx.bezierCurveTo(730.723, 1560.685, 732.455, 1560.331, 733.575, 1559.789);ctx.lineTo(734.152, 1561.994);ctx.closePath();ctx.fill();ctx.fillStyle = '#686869';ctx.beginPath();ctx.moveTo(737.641, 1541.132);ctx.lineTo(740.425, 1541.132);ctx.lineTo(740.425, 1551.531);ctx.lineTo(740.522, 1551.531);ctx.bezierCurveTo(741.097, 1550.699, 741.671, 1549.927, 742.2159, 1549.22);ctx.lineTo(748.809, 1541.124);ctx.lineTo(752.265, 1541.124);ctx.lineTo(744.4559, 1550.275);ctx.lineTo(752.8709, 1562.688);ctx.lineTo(749.5759, 1562.688);ctx.lineTo(742.4719, 1552.092);ctx.lineTo(740.4219, 1554.459);ctx.lineTo(740.4219, 1562.684);ctx.lineTo(737.64, 1562.684);ctx.lineTo(737.641, 1541.132);ctx.lineTo(737.641, 1541.132);ctx.closePath();ctx.fill();ctx.fillStyle = '#686869';ctx.beginPath();ctx.moveTo(780.198, 1551.691);ctx.bezierCurveTo(780.198, 1559.114, 775.681, 1563.045, 770.178, 1563.045);ctx.bezierCurveTo(764.488, 1563.045, 760.488, 1558.63, 760.488, 1552.107);ctx.bezierCurveTo(760.488, 1545.254, 764.744, 1540.78, 770.503, 1540.78);ctx.bezierCurveTo(776.392, 1540.78, 780.198, 1545.292, 780.198, 1551.691);ctx.closePath();ctx.moveTo(763.464, 1552.043);ctx.bezierCurveTo(763.464, 1556.648, 765.96, 1560.776, 770.345, 1560.776);ctx.bezierCurveTo(774.761, 1560.776, 777.254, 1556.713, 777.254, 1551.817);ctx.bezierCurveTo(777.254, 1547.531, 775.016, 1543.046, 770.3749, 1543.046);ctx.bezierCurveTo(765.769, 1543.052, 763.464, 1547.308, 763.464, 1552.043);ctx.closePath();ctx.fill();ctx.fillStyle = '#686869';ctx.beginPath();ctx.moveTo(783.816, 1541.132);ctx.lineTo(795.426, 1541.132);ctx.lineTo(795.426, 1543.468);ctx.lineTo(786.5959, 1543.468);ctx.lineTo(786.5959, 1550.635);ctx.lineTo(794.7549, 1550.635);ctx.lineTo(794.7549, 1552.944);ctx.lineTo(786.6, 1552.944);ctx.lineTo(786.6, 1562.705);ctx.lineTo(783.821, 1562.705);ctx.lineTo(783.816, 1541.132);ctx.lineTo(783.816, 1541.132);ctx.closePath();ctx.fill();ctx.fillStyle = '#686869';ctx.beginPath();ctx.moveTo(808.968, 1543.5);ctx.lineTo(802.406, 1543.5);ctx.lineTo(802.406, 1541.132);ctx.lineTo(818.374, 1541.132);ctx.lineTo(818.374, 1543.5);ctx.lineTo(811.782, 1543.5);ctx.lineTo(811.782, 1562.696);ctx.lineTo(808.968, 1562.696);ctx.lineTo(808.968, 1543.5);ctx.lineTo(808.968, 1543.5);ctx.closePath();ctx.fill();ctx.fillStyle = '#686869';ctx.beginPath();ctx.moveTo(823.56, 1541.132);ctx.lineTo(823.56, 1550.153);ctx.lineTo(833.997, 1550.153);
        ctx.lineTo(833.997, 1541.132);ctx.lineTo(836.81, 1541.132);ctx.lineTo(836.81, 1562.696);ctx.lineTo(833.997, 1562.696);ctx.lineTo(833.997, 1552.587);ctx.lineTo(823.56, 1552.587);ctx.lineTo(823.56, 1562.696);ctx.lineTo(820.782, 1562.696);ctx.lineTo(820.782, 1541.132);ctx.lineTo(823.56, 1541.132);ctx.closePath();ctx.fill();ctx.fillStyle = '#686869';ctx.beginPath();ctx.moveTo(852.808, 1552.587);ctx.lineTo(844.422, 1552.587);ctx.lineTo(844.422, 1560.36);ctx.lineTo(853.767, 1560.36);ctx.lineTo(853.767, 1562.697);ctx.lineTo(841.64, 1562.697);ctx.lineTo(841.64, 1541.132);ctx.lineTo(853.286, 1541.132);ctx.lineTo(853.286, 1543.468);ctx.lineTo(844.423, 1543.468);ctx.lineTo(844.423, 1550.283);ctx.lineTo(852.809, 1550.283);ctx.lineTo(852.808, 1552.587);ctx.lineTo(852.808, 1552.587);ctx.closePath();ctx.fill();ctx.fillStyle = '#686869';ctx.beginPath();ctx.moveTo(860.871, 1555.915);ctx.lineTo(858.632, 1562.696);ctx.lineTo(855.751, 1562.696);ctx.lineTo(863.079, 1541.132);ctx.lineTo(866.433, 1541.132);ctx.lineTo(873.792, 1562.696);ctx.lineTo(870.813, 1562.696);ctx.lineTo(868.505, 1555.915);ctx.lineTo(860.871, 1555.915);ctx.closePath();ctx.moveTo(867.942, 1553.739);ctx.lineTo(865.831, 1547.531);ctx.bezierCurveTo(865.352, 1546.125, 865.03, 1544.843, 864.711, 1543.593);ctx.lineTo(864.648, 1543.593);ctx.bezierCurveTo(864.328, 1544.873, 863.971, 1546.188, 863.555, 1547.495);ctx.lineTo(861.448, 1553.734);ctx.lineTo(867.942, 1553.739);ctx.lineTo(867.942, 1553.739);ctx.closePath();ctx.fill();ctx.fillStyle = '#686869';ctx.beginPath();ctx.moveTo(878.599, 1543.5);ctx.lineTo(872.038, 1543.5);ctx.lineTo(872.038, 1541.132);ctx.lineTo(888.005, 1541.132);ctx.lineTo(888.005, 1543.5);ctx.lineTo(881.413, 1543.5);ctx.lineTo(881.413, 1562.696);ctx.lineTo(878.599, 1562.696);ctx.lineTo(878.599, 1543.5);ctx.closePath();ctx.fill();ctx.fillStyle = '#686869';ctx.beginPath();ctx.moveTo(901.575, 1552.587);ctx.lineTo(893.191, 1552.587);ctx.lineTo(893.191, 1560.36);ctx.lineTo(902.5341, 1560.36);ctx.lineTo(902.5341, 1562.697);ctx.lineTo(890.407, 1562.697);ctx.lineTo(890.407, 1541.132);ctx.lineTo(902.053, 1541.132);ctx.lineTo(902.053, 1543.468);ctx.lineTo(893.1951, 1543.468);ctx.lineTo(893.1951, 1550.283);ctx.lineTo(901.579, 1550.283);ctx.lineTo(901.575, 1552.587);ctx.lineTo(901.575, 1552.587);ctx.closePath();ctx.fill();ctx.fillStyle = '#686869';ctx.beginPath();ctx.moveTo(906.151, 1541.42);ctx.bezierCurveTo(907.554, 1541.132, 909.575, 1540.972, 911.495, 1540.972);ctx.bezierCurveTo(914.473, 1540.972, 916.391, 1541.516, 917.734, 1542.737);ctx.bezierCurveTo(918.822, 1543.697, 919.425, 1545.171, 919.425, 1546.835);ctx.bezierCurveTo(919.425, 1549.683, 917.632, 1551.569, 915.362, 1552.339);ctx.lineTo(915.362, 1552.435);ctx.bezierCurveTo(917.026, 1553.011, 918.014, 1554.547, 918.53, 1556.789);ctx.bezierCurveTo(919.234, 1559.798, 919.746, 1561.877, 920.194, 1562.709);ctx.lineTo(917.314, 1562.709);ctx.bezierCurveTo(916.96, 1562.103, 916.4821, 1560.244, 915.874, 1557.56);ctx.bezierCurveTo(915.234, 1554.582, 914.083, 1553.463, 911.557, 1553.372);ctx.lineTo(908.937, 1553.372);ctx.lineTo(908.937, 1562.718);ctx.lineTo(906.155, 1562.718);ctx.lineTo(906.151, 1541.42);ctx.lineTo(906.151, 1541.42);ctx.closePath();ctx.moveTo(908.935, 1551.242);ctx.lineTo(911.788, 1551.242);ctx.bezierCurveTo(914.767, 1551.242, 916.652, 1549.61, 916.652, 1547.146);ctx.bezierCurveTo(916.652, 1544.362, 914.631, 1543.146, 911.6901, 1543.115);ctx.bezierCurveTo(910.3431, 1543.115, 909.3821, 1543.244, 908.936, 1543.373);ctx.lineTo(908.935, 1551.242);ctx.lineTo(908.935, 1551.242);ctx.closePath();ctx.fill();ctx.fillStyle = '#FFFFFF';ctx.strokeStyle = '#C7C7C7';ctx.strokeRect(572.871, 601.374, 37.272, 37.249);ctx.fillStyle = '#FFFFFF';ctx.strokeStyle = '#C7C7C7';ctx.strokeRect(627.941, 601.374, 37.264, 37.249);ctx.fillStyle = '#FFFFFF';ctx.strokeStyle = '#C7C7C7';ctx.strokeRect(875.657, 601.374, 37.262, 37.249);ctx.fillStyle = '#FFFFFF';ctx.strokeStyle = '#C7C7C7';
        ctx.strokeRect(930.709, 601.374, 37.275, 37.249);
    }

    handleSubmit = (e) => {
        console.log("Inside Submit for local");
        let storeObject = {};
        storeObject['seats'] = this.state.selected;
        localStorage.setItem('seatpicker', JSON.stringify(storeObject));
    }

    onMouseOut = () => {
        this.setState({ hover: "" });
    }
    onHover = (index) => {
        this.setState({ hover: index });
    }
    toggleConvenienceFlyout = () => {
        if(this.state.convenienceFlyout) this.setState({ convenienceFlyout: false })
        else this.setState({ convenienceFlyout: true })
    }
    toggleSelected = (index) => {
        if(this.state.selected.includes(index)) {
            console.log("includes",index);
            this.setState({
                selected: this.state.selected.filter((i) => i !== index)
              });
        }
        else this.setState({ selected: this.state.selected.concat(index) });
        console.log("totalticket",this.state.prevState.totalTickets);
        console.log("selected length",this.state.selected.length);
        if(this.state.prevState.totalTickets == (this.state.selected.length+1)) {
            this.setState({
                disable: true
            })
        }
        else {
            this.setState({
                disable: false
            })
        }
    }

    render() {
        const styleseatPicker = {
            height: '700px', top: '0px'
        }
        const styleCanvas = {
            width:'100%', height:'100%'
        }
        let seatArray = ['M9','M8','M7','M6','M5','M4','M3','M2','M1','L9','L8','L7','L6','L5','L4','L3','L2','L1','K9','K8','K7','K6','K5','K4','K3','K2','K1','J10','J9','J8','J7','J6','J5','J4','J3','J2','J1','I11','I10','I9','I8','I7','I6','I5','I4','I3','I2','I1','H13','H12','H11','H10','H9','H8','H7','H6','H5','H4','H3','H2','H1','G14','G13','G12','G11','G10','G9','G8','G7','G6','G5','G4','G3','G2','G1','F15','F14','F13','F12','F11','F10','F9','F8','F7','F6','F5','F4','F3','F2','F1','E16','E15','E14','E13','E12','E11','E10','E9','E8','E7','E6','E5','E4','E3','E2','E1','D14','D13','D12','D11','D10','D9','D8','D7','D6','D5','D4','D3','D2','D1','C17','C16','C15','C14','C13','C12','C11','C10','C9','C8','C7','C6','C5','C4','C3','C2','C1','B17','B16','B15','B14','B13','B12','B11','B10','B9','B8','B7','B6','B5','B4','B3','B2','B1','A15','A14','A13','A12','A11','A10','A9','A8','A7','A6','A5','A4','A3','A2','A1'];
        
        let seatBooked = this.state.movieHall.seats;//[1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,2,2,2,2,0,0,2,2,2,2,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0];

        const styleModuleStandard = {
            marginTop: 0
        }

        let styleCont = null; let seatsError = null;
        if(this.state.selected.length!=this.state.prevState.totalTickets) {
            console.log("inside continue");
            styleCont = {
                pointerEvents: 'none'
            }
            seatsError = (
                <p style={{color: 'red'}}>Seats selected does not match total number of Tickets</p>
            )
        }
        else {
            styleCont = {
                marginTop: '10px'
            }
        }

        let seatsArrangement = seatArray.map((seat, index) => {
            return (
               
                    <Seathover
                        index={seat}
                        onHover={this.onHover}
                        hover={this.state.hover}
                        toggleSelected={this.toggleSelected}
                        selected={this.state.selected}
                        disabling={this.state.disable}
                        booked={seatBooked[index]}
                    ></Seathover>
                
            );
        })

            let arr3 = ['General', 'Student', 'Child/Senior'];
            let ticketPricing =  []; let ConveniencePricing = [];
            arr3.forEach((heading, index) => {
            // onePrice = () => {
                index += 1;
                if(this.state.prevState['row'+index+'Sum']!=0 && !isNaN(this.state.prevState['row'+index+'Sum'])) {
                    let num = Number(this.state.prevState['row'+index+'Sum'])/Math.floor(this.state.movieHall.hallPrice/2);
                    let priceDollar = Math.floor(this.state.movieHall.hallPrice/2);
                    if(heading=="General") {
                        num = Number(this.state.prevState['row'+index+'Sum'])/this.state.movieHall.hallPrice;
                        priceDollar = this.state.movieHall.hallPrice;
                    }
                    ticketPricing.push(
                        <tr className="ticketTypeRow pricing">
                            <td className="type heading">
                                <span className="ticketTypeHeading">{heading}</span>
                            </td>
                            <td className="price">{num} x ${priceDollar}.00  = </td>
                            <td className="math">${this.state.prevState['row'+index+'Sum'].toFixed(2)}</td>
                        </tr>
                    )
                    ConveniencePricing.push (
                        <tr className="feesRow pricing">
                            <td className="type">{heading}</td>
                            <td className="amt">{num} x </td>
                            <td className="price">$1.50 = </td>
                            <td className="math">${(num*1.5).toFixed(2)}</td>
                        </tr>
                    )
                }
            })

            let convenienceFlyout = null;
            if(this.state.convenienceFlyout) {
                convenienceFlyout = (
                    <div className="convenienceFeeFlyout">
                        <table>
                            <tbody>
                                <tr className="closeBox">
                                    <td colspan="4"><a onClick={this.toggleConvenienceFlyout}>X</a></td>
                                </tr>
                                <tr>
                                    <td colspan="4" className="heading">Convenience fee includes:</td>
                                </tr>
                                {ConveniencePricing}
                            </tbody>    
                        </table>
                    </div>
                );
            }

            const renderer = ({ minutes, seconds, completed }) => {
                // if (completed) {
                //   // Render a completed state
                //   return <Completionist />;
                // } else {
                  // Render a countdown
                  return <span>{minutes}:{seconds}</span>;
                // }
              }; 
        
        return (
            <div id="siteContainer" className="ticketBoxoffice">
                <div id="headerContainer" className="purchase detail on-order" name="HeaderContainer">
                    <div id="headerPurchase">
                        <div className="commonContainer"> 
                            <div id="logo">
                                <a href="http://www.fandango.com/" title="Click to go to Fandango homepage">Fandango Home</a>
                            </div>
                            <div id="bannerMessage">You're a guaranteed ticket away from the perfect movie night.</div>
                        </div>
                    </div>
                </div>
                <div id="container" className="commonContainer">
                    <div className="row">
                        <div id="heading" className="main">
                                <h1 className="sp-section-header inline">Checkout</h1> 
                                <ul className="breadcrumb">
                                    <li className="tickets complete"><i className="icon"></i>Tickets</li> 
                                    <li className="payment "><i className="icon"></i>Payment</li> 
                                    <li className="confirmation "><i className="icon"></i>Confirmation</li> 
                                </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="main">
                            <div className="module-stacked">
                                <div className="module-standard">
                                    <span className="helplink">
                                    <a  className="help">Need help picking your seat?</a>
                                    </span>
                                    <h2 className="header-secondary">Pick Your Seats</h2>
                                    <div id="seatpickerHeader"> 
                                        <div id="seatLegend">
                                            <ul className="seatDivs">
                                                <li><div className="availableSeat"></div> Available</li>
                                                <li><div className="unavailableSeat"></div> Unavailable</li>
                                                <li><div className="selectedSeat"></div> Selected</li>
                                                <li><div className="availableSeat wheelchair"></div> Accessible</li>
                                            </ul>
                                        </div>
                                        <div id="TitleManualSelection">
                                            <p className="notes">Note that the system will not allow you to leave a single unoccupied seat in between selected seats.</p>
                                        </div>
                                    </div>   
                                </div>
                                <div id="seatPickerContainerDesktop" className="module-standard module-no-padding">
                                    <div id="mapZoom" style={styleseatPicker} ref="mapZoom">
                                    </div>
                                    <div onMouseOut={this.onMouseOut}>
                                        {seatsArrangement}
                                    </div>
                                    <canvas id="map" width="1600" height="1600" style={styleCanvas}  ref="map" ></canvas>
                                </div> 
                                <div id="seatpickerFooter" className="module-standard">
                                    <section>
                                        <span className="newshowtimelink"><a href="">Select new showtime</a>{seatsError}</span>
                                        <div id="navigation-bar" className="sp-buttonContainer">
                                            
                                            <Link type="submit" to="/transaction/checkout" name="NextButton" value="Continue" onClick={this.handleSubmit} id="NextButton" style={styleCont} className="sp-button primary medium">Continue</Link>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                        <div className="side">                   
                            <div className="module-standard module-timer collapseEmpty"> 
                                <div id="timer" className="remove">
                                    <span className="timerText">Time to complete your order: </span>
                                    <span className="countdown" id="countdownTimer"><Countdown date={Date.now() + 500000} renderer={renderer} /></span>
                                </div>
                            </div>
                            <div style={styleModuleStandard} className="module-standard">  
                                <div id="movieTicketSummary"> 
                                    <div className="moviePoster">
                                        <img id="moviePosterImage" alt="" src={"http://localhost:8900/moviesImages/"+this.state.movieHall.moviePhoto} />
                                    </div>
                                    <div className="movieInfo"> 
                                        <ul class="movie-specs">
                                            <li class="title"><h3 id="movieTitle">{this.state.movieHall.movieName}</h3></li>
                                            <li class="info"><span id="ratingInfo" class="emptyCheck">{this.state.movieHall.movieRating}</span><span id="ratingSeparator" class="separator emptyCheck">, </span><span class="emptyCheck" id="runtimeInfo">{this.state.movieHall.movieLength}</span></li>
                                        </ul>
                                        <ul className="movie-other-specs">
                                            <li><h2 id="theaterName">{this.state.movieHall.hallName}</h2></li>
                                            <li id="theaterAddress">
                                                <a id="maplink" href="#" target="_blank" class="emptyCheck">{this.state.movieHall.hallAddress}<br/>{this.state.movieHall.hallCity}, {this.state.movieHall.hallState} {this.state.movieHall.hallZipCode}</a> 
                                            </li>
                                            <li className="auditorium"><h2 id="auditoriumInfo" className="emptyCheck">Auditorium {this.state.movieHall.screenID}</h2></li>
                                            <li className="seats"><div id="selectedSeatIDsLabel" className="faded">Seats {this.state.selected.length==0?"not selected":this.state.selected.toString()}</div> <div id="selectedSeatIDs"></div></li>
                                            <li className="agePolicy emptyCheck"><a href="#">{this.state.movieHall.hallName.split(" ")[0]} Theatres Age Policy</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="module-standard">
                                    <div id="orderSummary">
                                        <div id="IDRequiredMessage">
                                        <table>
                                            <tbody>
                                                {ticketPricing}
                                                <tr className="feesRow pricing">
                                                    <td className="type heading" colspan="2">
                                                        <a onClick={this.toggleConvenienceFlyout}>Convenience Fee</a>
                                                        {convenienceFlyout}
                                                    </td>
                                                    <td className="math">${(Number(this.state.prevState.totalTickets)*1.5).toFixed(2)}</td>
                                                </tr>
                                            <tr className="totalRow">
                                                <td className="paymentLogo"><span className=""></span></td>
                                                <td className="total-wrap">Total:</td>
                                                <td className="">
                                                    <span className="total" id="purchaseTotal">${(this.state.prevState.totalSum+Number(this.state.prevState.totalTickets)*1.5).toFixed(2)}</span>
                                                    <input name="OrderSummaryView$purchaseTotalHidden" type="hidden" id="OrderSummaryView_purchaseTotalHidden" value="34.50"/>
                                                </td>
                                            </tr>
                                        </tbody></table>
                                        </div>
                                    </div>
                                    </div>
                            </div>
                            <div className="module-standard module-cutout">  
                                <p><a className="help helplink" href="">Need Help With Checkout?</a></p>                
                            </div>
                        </div>
                    </div>
                </div>
                <div id="footerContainer">
                    <div id="footer" className="commonContainer">
                        <div id="contents">         
                            <p> 
                                <a onclick="" className="purchaseFooterLink" href="http://www.fandango.com/privacypolicy.aspx"> Your Privacy Rights - Privacy Policy</a> |                  
                                <a onclick="" className="purchaseFooterLink" href="http://www.fandango.com/terms-and-policies">Terms and Policies</a> | 
                                <a onclick="" className="purchaseFooterLink" href="http://www.fandango.com/movie-ticket-policy">Movie Ticket Policy</a> | 
                                <a href="#" data-reveal-id="lb_worryFreeTickets" onclick="$('#lb_worryFreeTickets').foundation('reveal','open');return false;">Refunds and Exchanges</a>
                            </p>    
                            
                            <p>
                            Copyright © 2018 Fandango. All rights reserved.  Fandango Media, LLC. 12200 W. Olympic Blvd, Suite 400, Los Angeles, CA 90064
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}