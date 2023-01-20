import { characterDetails, datalist } from "../../../Infrastructure/Task";


const actions = {
    setLoading:
      (isLoading) =>
      ({ setState }) => {
        setState({ isLoading });
      },
    setData:
      (data) =>
      ({ setState }) => {
        setState({ data });
      },
      setDetails:
      (details) =>
      ({ setState }) => {
        setState({ details });
      },
      Getdatas:
      () =>
      async ({ setState,dispatch }) => {
        dispatch(actions.setLoading(true));
  
        try {
          const res = await datalist();
          setState({data :res.data.docs})

        } catch (err) {
        } finally {
          dispatch(actions.setLoading(false));
        }
      },
      GetDetailsview:
      (id) =>
      async ({ setState,dispatch }) => {
        dispatch(actions.setLoading(true));
        try {
          const res = await characterDetails(id);
          setState({setDetails:res.data.docs})
        } catch (err) {
          dispatch(actions.setLoading(true));
        } finally {
          dispatch(actions.setLoading(false));
        }
      },
    }
    export default actions;