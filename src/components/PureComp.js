import React, { PureComponent } from 'react'
/*regular component does not implement the shouldcomponentupdate methode it always return by default
a pure component implements shouldcomponentupdate with a
shallow props and state comparison

 */
class PureComp extends PureComponent {
  render() {
     console.log("***********pure comp rendre **********")
    return (
      <div>PureComp</div>
    )
  }
}

export default PureComp