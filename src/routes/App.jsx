import React from 'react'
import Layout from '../containers/Layout'
import Home from '../pages/Home'
import Login from '../pages/Login'
import '@styles/Login.scss'
import '@styles/global.css'


const App = () => {
    return (
		<Layout>
			<Login />
		</Layout>
		// <AppContext.Provider value={initialState}>
		// 	<BrowserRouter>
		// 		<Layout>
		// 			<Switch>
		// 				<Route exact path="/" component={Home} />
		// 				{/* <Route exact path="/login" component={Login} /> */}
		// 				{/* <Route exact path="/password-recovery" component={PasswordRecovery} /> */}
		// 				{/* <Route exact path="/send-email" component={SendEmail} /> */}
		// 				{/* <Route exact path="/new-password" component={NewPassword} /> */}
		// 				{/* <Route exact path="/account" component={MyAccount} /> */}
		// 				{/* <Route exact path="/signup" component={CreateAccount} /> */}
		// 				{/* <Route exact path="/checkout" component={Checkout} /> */}
		// 				{/* <Route exact path="/orders" component={Orders} /> */}
		// 				{/* <Route path="*" component={NotFound} /> */}
		// 			</Switch>
		// 		</Layout>
		// 	</BrowserRouter>
		// </AppContext.Provider>
    )
}

export default App