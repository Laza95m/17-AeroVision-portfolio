import axios from 'axios';
import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageNotFound from '../components/PageNotFound/PageNotFound';
import Home from '../components/Home/Home';
import AboutMe from '../components/AboutMe/AboutMe';
import Services from '../components/Services/Services';
import Testimonials from '../components/Testimonials/Testimonials';
import ContactMe from '../components/ContactMe/ContactMe';
import LogOut from '../components/LogOut/LogOut';
import Admin from '../components/Admin/Admin';
import ChangeData from '../components/Admin/ChangeData/ChangeData';
import AddNewUser from '../components/Admin/AddNewUser/AddNewUser';
import LogIn from '../components/LogIn/LogIn';

const Context = createContext();

export const UseContext = () => {
  return useContext(Context);
};

export const ContextProvider = ({ children }) => {
  const links = [
    {
      to: '/',
      name: 'Home',
    },
    {
      to: '/about-me',
      name: 'About me',
    },
    {
      to: '/services',
      name: 'Services',
    },
    {
      to: '/testimonials',
      name: 'Testimonials',
    },
    {
      to: '/contact-me',
      name: 'Contact Me',
    },
  ];

  //-------------------------------------------------------------

  const softwareVariants = {
    initial: {
      y: -500,
      scale: 0.5,
    },
    animate: {
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const skillVariants = {
    initial: {
      y: 10,
      opacity: 0,
    },
    exit: {
      y: -10,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  const burgerVariants = {
    open: {
      x: 0,
      scale: 1,
      opacity: 1,
      zIndex: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    closed: {
      x: '-50%',
      scale: 0.8,
      zIndex: -1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const servicesPopUpVariants = {
    open: {
      opacity: 1,
      x: 0,
      scale: 1,
      zIndex: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    closed: {
      x: '-50%',
      scale: 0.5,
      zIndex: -1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const contactMeVariants = {
    initial: {
      scale: 0,
    },
    animate: {
      scale: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const variantsLeft = {
    initial: {
      x: -500,
      opacity: 0,
      scale: 0.5,
    },
    animate: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const variantsRight = {
    initial: {
      x: 500,
      opacity: 0,
      scale: 0.5,
    },
    animate: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const variantsTop = {
    initial: {
      y: -500,
      opacity: 0,
      scale: 0.5,
    },
    animate: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const variantsBottom = {
    initial: {
      y: 500,
      opacity: 0,
      scale: 0.5,
    },
    animate: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  //-------------------------------------------------------------

  const validName = {
    required: 'The name is required',
    pattern: {
      value: /^[A-Za-zА-Яа-я]{1,20}$/,
      message: 'Enter valid name',
    },
  };

  const validEmail = {
    required: 'The email is required',
    pattern: {
      value: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
      message: 'Enter valid email like: bob7.h@gmail.com',
    },
  };

  const validSrc = {
    required: 'The image is required',
    pattern: {
      value: /^\/([|.|\w|\s|-])*\.png$/g,
      message: 'Enter valid image like: /sun.png',
    },
  };

  const validAlt = {
    required: 'The alt is required',
  };

  const validStar = {
    required: 'The star is required',
    min: {
      value: 1,
      message: 'Minimum number is 1',
    },
    max: {
      value: 5,
      message: 'Maximum number is 5',
    },
  };

  const validDescription = {
    required: 'The description is required',
  };

  const validUserName = {
    required: 'The name is required',
    pattern: {
      value: /(^[A-Z]{1}[a-z]{2,16})([ ]{0,1})([A-Z]{1}[a-z]{2,16})/,
      message: 'Enter valid name like: John Smith',
    },
  };

  const validPosition = {
    required: 'The position is required',
  };

  //-------------------------------------------------------------

  const [data, setData] = useState([]);
  const [testimonialsData, setTestimonialsData] = useState([]);
  const [testimonialsDataById, setTestimonialsDataById] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    try {
      setIsLoading(true);

      const response = await axios.get('http://localhost:3000/store');

      setData(response.data);
    } catch (error) {
      console.log(error);
      notify.error('receipts');
    } finally {
      setIsLoading(false);
    }
  };

  const getTestimonialsData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/usersData');

      setTestimonialsData(response.data);
    } catch (error) {
      console.log(error);
      notify.error('receipts');
    }
  };

  const addNewTestimonialsData = async (data) => {
    const userData = {
      id: testimonialsData.length + 1,
      img: {
        src: data.src,
        alt: data.alt,
      },
      star: +data.star,
      description: data.description,
      name: data.name,
      position: data.position,
    };

    try {
      await axios.post('http://localhost:3000/usersData', {
        ...userData,
      });

      notify.success('create');
    } catch (error) {
      console.log(error);
      notify.error('create');
    }
  };

  const getUsersDataById = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3000/usersData/${id}`);

      setTestimonialsDataById(response.data);
    } catch (error) {
      console.log(error);
      notify.error('receipts');
    }
  };

  const deleteUserById = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/usersData/${id}`);

      notify.success('deleted');
      getTestimonialsData();
    } catch (error) {
      console.log(error);
      notify.error('deleted');
    }
  };

  const putUserById = async (id, data) => {
    const userData = {
      img: {
        src: data.src,
        alt: data.alt,
      },
      star: +data.star,
      description: data.description,
      name: data.name,
      position: data.position,
    };

    try {
      await axios.put(`http://localhost:3000/usersData/${id}`, {
        id: id,
        ...userData,
      });
      notify.success('changed');
    } catch (error) {
      console.log(error);
      notify.error('changed');
    }
  };

  //-------------------------------------------------------------

  const [isServicesPopUp, setIsServicesPopUp] = useState(false);

  const openServicesPopUp = (id) => {
    setIsServicesPopUp(id);
    document.body.style.overflow = 'hidden';
  };

  const closeServicesPopUp = () => {
    setIsServicesPopUp(null);
    document.body.style.overflow = 'auto';
  };

  //-------------------------------------------------------------

  const [isBurgerPopUp, setIsBurgerPopUp] = useState(false);

  const openBurgerPopUp = () => {
    setIsBurgerPopUp(true);
    document.body.style.overflow = 'hidden';
  };

  const closeBurgerPopUp = () => {
    setIsBurgerPopUp(false);
    document.body.style.overflow = 'auto';
  };

  //-------------------------------------------------------------

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  //-------------------------------------------------------------

  const sendTelegramMessage = async (data) => {
    const message = `Name: ${data.name}
Email: ${data.email}
Title: ${data.title}
Description: ${data.description}`;

    const token = '6629321266:AAGBx6mSrJ8wI0DxYPAxYE6MC3Ckk1iH9vc';
    const chatId = '-4098685554';
    const urlApi = `https://api.telegram.org/bot${token}/sendMessage`;

    try {
      await axios.post(urlApi, {
        chat_id: chatId,
        text: message,
      });

      notify.success('dispatched');
    } catch (error) {
      notify.error('dispatched');
    }
  };

  //-------------------------------------------------------------

  const [selectSkill, setSelectSkill] = useState(0);

  //-------------------------------------------------------------

  const toastEmitter = {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  };

  const notify = {
    success(text) {
      toast.success(`Data ${text} correctly`, toastEmitter);
    },

    error(text) {
      toast.error(`Data ${text} incorrectly`, toastEmitter);
    },
  };

  //-------------------------------------------------------------

  const navigate = useNavigate();

  //-------------------------------------------------------------

  const routePages = [
    {
      path: '*',
      element: <PageNotFound />,
    },
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about-me',
      element: <AboutMe />,
    },
    {
      path: '/services',
      element: <Services />,
    },
    {
      path: '/testimonials',
      element: <Testimonials />,
    },
    {
      path: '/contact-me',
      element: <ContactMe />,
    },
  ];

  const adminPage = [
    { path: '/log-out', element: <LogOut /> },
    { path: '/admin', element: <Admin /> },
    { path: '/admin/:id', element: <ChangeData /> },
    { path: '/admin/add-new-user', element: <AddNewUser /> },
  ];

  const userPage = [{ path: '/log-in', element: <LogIn /> }];

  //-------------------------------------------------------------

  const [adminPerson, setAdminPerson] = useState(
    JSON.parse(localStorage.getItem('admin'))
  );

  const checkLogIn = (data, adminData) => {
    const admin = {
      name: adminData?.name,
      password: adminData?.password,
    };

    if (
      data.name === adminData?.name &&
      data.password === adminData?.password
    ) {
      notify.success('entered');
      localStorage.setItem('admin', JSON.stringify(admin));
      setTimeout(() => {
        setAdminPerson(JSON.parse(localStorage.getItem('admin')));
        navigate('/log-out');
      }, 2500);
    } else {
      notify.error('entered');
      setAdminPerson(null);
      localStorage.clear();
    }
  };

  const logOut = () => {
    setAdminPerson(null);
    localStorage.clear();
    navigate('/log-in');
  };

  return (
    <Context.Provider
      value={{
        links,
        softwareVariants,
        skillVariants,
        burgerVariants,
        servicesPopUpVariants,
        contactMeVariants,
        variantsLeft,
        variantsRight,
        variantsTop,
        variantsBottom,
        validName,
        validEmail,
        validSrc,
        validAlt,
        validStar,
        validDescription,
        validUserName,
        validPosition,
        isLoading,
        data,
        getData,
        testimonialsData,
        getUsersDataById,
        testimonialsDataById,
        getTestimonialsData,
        putUserById,
        deleteUserById,
        addNewTestimonialsData,
        isBurgerPopUp,
        isServicesPopUp,
        openBurgerPopUp,
        openServicesPopUp,
        closeBurgerPopUp,
        closeServicesPopUp,
        stopPropagation,
        selectSkill,
        setSelectSkill,
        sendTelegramMessage,
        checkLogIn,
        logOut,
        adminPerson,
        routePages,
        adminPage,
        userPage,
      }}
    >
      {children}
    </Context.Provider>
  );
};
