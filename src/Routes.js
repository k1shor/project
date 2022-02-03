import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './components/pages/Home'
import Signin from './components/pages/Signin'
import Signup from './components/pages/Signup'


import Confirm from './components/pages/Confirm'
import ForgetPassword from './components/pages/ForgetPassword'
import ResetPassword from './components/pages/ResetPassword'
import AdminDashboard from './components/pages/AdminDashboard'
import AddCategory from './components/admin/AddCategory'
import UserDashboard from './components/auth/UserDashboard'
import AdminRoute from './components/auth/AdminRoute'
import PrivateRoute from './components/auth/PrivateRoute'
import AddProperty from './components/admin/AddProperty'
import Allproperty from './components/admin/AllProperty'

const Routes = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />

                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/signin" component={Signin} />
                    <Route exact path="/email/confirmation/:token" component={Confirm} />
                    <Route exact path="/forgotpassword" component={ForgetPassword} />
                    <Route exact path="/user/resetpassword/:token" component={ResetPassword} />


                  
                    {/* admin  */}
                    <AdminRoute exact path="/admin/dashboard" component={AdminDashboard} />
                    <AdminRoute exact path="/admin/addcategory" component={AddCategory} />
                    <AdminRoute exact path="/admin/addproperty" component={AddProperty} />
                    <AdminRoute exact path="/admin/allproperty" component={Allproperty} />


                    {/* user  */}
                    <PrivateRoute exact path="/user/profile" component={UserDashboard} />




                </Switch>
            </Router>
        </>
    )
}

export default Routes
