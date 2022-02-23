import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
/* import ClassClick from "./components/ClassClick";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from './components/FunctionClick';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList'; 
import StyleSheet from './components/StyleSheet'*/
/* import Inline from './components/Inline';
import "./appStyles.css"
import styles from "./appStyles.module.css" */
/* import Form from "./components/Form"
import LifcecycleA from './components/LifcecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import RegularComp from './components/RegularComp';
import PureComp from './components/PureComp';
 */
/* import ParentComp from "./components/ParentComp"
import RefsDemo from "./components/RefsDemo"
import FocusInput from "./components/FocusInput" */
/* import FRParentInput from "./components/FRParentInput"
import PortalDemo from "./components/PortalDemo" */

/* import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter'; */

/* import HookCounterTwo from './components/HookCounterTwo'; */
import HookCounterThree from './components/HookCounterThree';
class App extends Component {
  render(){
  return (
    <div className="App">
   {/*  <h1 className='error'> error </h1>
    <h1 className={styles.success}> sucess </h1> */}
   {/*  <StyleSheet primary={true}/> */}
{/* <Inline></Inline> */}
  {/* <HookCounter></HookCounter> */}

<HookCounterThree/>
    </div>
  );
}
}

export default App;
