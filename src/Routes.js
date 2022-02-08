import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './components/pages/Home'
import Signin from './components/pages/Signin'
import Signup from './components/pages/Signup'


import Confirm from './components/pages/Confirm'
import ForgetPassword from './components/pages/ForgetPassword'
import ResetPassword from './components/pages/ResetPassword'
import AdminDashboard from './components/pages/AdminDashboard'
import AddCategory from './components/admin/category/AddCategory'
import UserDashboard from './components/pages/UserDashboard'
import AdminRoute from './components/auth/AdminRoute'
import PrivateRoute from './components/auth/PrivateRoute'
import AddProperty from './components/admin/Property/AddProperty'
import Allproperty from './components/admin/Property/AllProperty'
import Allcategory from './components/admin/category/AllCategory'
import Allusers from './components/admin/AllUsers'
import EditCategory from './components/admin/category/EditCategory'
import AllcategorySuccess from './components/admin/category/AllCategorySuccess'
import AllcategoryDeleteSuccess from './components/admin/category/AllCategoryDeleteSuccess'
import DeleteCategory from './components/admin/category/DeleteCategory'
import AddSuccess from './components/admin/Property/AddSuccess'
import AllPropertyUpdateSuccess from './components/admin/Property/AllPropertyUpdateSuccess'
import AllPropertyDeleteSuccess from './components/admin/Property/AllPropertyDeleteSuccess'
import DeleteProperty from './components/admin/Property/DeleteProperty'
import EditProperty from './components/admin/Property/EditProperty'
import Buy from './components/pages/Buy'
import Rent from './components/pages/Rent'
import Blogs from './components/pages/Blogs'
import Contact from './components/pages/Contact'
import About from './components/pages/About'
import House from './components/pages/House'
import Land from './components/pages/Land'
import PropertyDetails from './components/pages/PropertyDetails'



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
                    <Route exact path="/buy" component={Buy}/>
                    <Route exact path="/lease" component={Rent}/>
                    <Route exact path="/house" component={House}/>
                    <Route exact path="/land" component={Land}/>

                    <Route exact path="/propertydetails/:id" component={PropertyDetails}/>

                    <Route exact path="/blogs" component={Blogs}/>
                    <Route exact path="/contact" component={Contact}/>
                    <Route exact path="/about" component={About}/>
                    
                    
                    
                    

                  
                    {/* admin  */}
                    <AdminRoute exact path="/admin/dashboard" component={AdminDashboard} />
                    <AdminRoute exact path="/admin/dashboard/addSuccess" component={AddSuccess} />
                    
                    <AdminRoute exact path="/admin/addcategory" component={AddCategory} />
                    <AdminRoute exact path="/admin/addproperty" component={AddProperty} />
                    <AdminRoute exact path="/admin/allproperty" component={Allproperty} />
                    <AdminRoute exact path="/admin/allcategory" component={Allcategory} />
                    <AdminRoute exact path="/admin/allcategory/updateSuccess" component={AllcategorySuccess} />
                    <AdminRoute exact path="/admin/allcategory/deleteSuccess" component={AllcategoryDeleteSuccess} />
                    <AdminRoute exact path="/category/delete/:token" component={DeleteCategory}/>
                    <AdminRoute exact path="/admin/allusers" component={Allusers}/>
                    <AdminRoute exact path="/category/edit/:token" component={EditCategory}/>

                    <AdminRoute exact path="/admin/property/updateSuccess" component={AllPropertyUpdateSuccess}/>
                    <AdminRoute exact path="/admin/property/deleteSuccess" component={AllPropertyDeleteSuccess}/>
                    <AdminRoute exact path="/admin/property/update/:token" component={EditProperty}/>
                    <AdminRoute exact path="/admin/property/delete/:token" component={DeleteProperty}/>


                    {/* user  */}
                    <PrivateRoute exact path="/user/profile" component={UserDashboard} />




                </Switch>
            </Router>
        </>
    )
}

export default Routes
