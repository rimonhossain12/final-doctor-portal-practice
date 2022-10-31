import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const [user] = useAuthState(auth);
    console.log('booking modal page', user);
    const { name, slots } = treatment;

    const handleFormSubmit = (e) => {
        const slot = e.target.slot.value;
        console.log(name, slot);
        e.preventDefault();
        // for closing submit button
        setTreatment(); // bcz empty if treatment useState is Empty it not open

    }

    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg py-4">{name}</h3>
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <form onSubmit={handleFormSubmit}>
                        <input name='date' type="text" disabled value={format(date, 'PP')} className="mb-4 input input-bordered input-accent w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs mb-4">
                            {
                                slots.map(slot => <option>{slot}</option>)
                            }
                        </select>
                        <input type="name" disabled value={user?.displayName} className="input input-bordered input-accent w-full max-w-xs mb-4" />
                        <input type="email" disabled value={user?.email} className="input input-bordered input-accent w-full max-w-xs mb-4" />
                        <input type="phone" placeholder="Your Phone Number" className="input input-bordered input-accent w-full max-w-xs mb-4" />
                        <input type="submit" value="submit" className="input btn-primary text-white input-bordered input-accent w-full max-w-xs mb-4" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;