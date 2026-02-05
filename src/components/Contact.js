import User from "./User";
import UserClass from "./UserClass";

const Contact = () => {
    return  (
        <div>
            <h1 className="text-3xl tex-bold m-4 p-4">Contact Us</h1>
            <form>
                <input type="text" placeholder="name" className="border-2 p-2 m-2"></input>
                <input type="text" placeholder="message" className="border-2 m-2 p-2"></input>
                <button className="bg-gray-200 rounded-md m-2 p-2">Submit</button>
            </form>
        </div>
    )
}

export default Contact;