const useToday = () =>{
    const date = new Date().toISOString().split('T')[0];
    return date;
}
export default useToday;