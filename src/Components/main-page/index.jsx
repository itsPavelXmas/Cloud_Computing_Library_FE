import React, { useEffect, useState } from "react";
import './styles.css';
import { getBooks, getBookDescription, getAudioData, getTranslatedText, sendBookToMail } from './api'
function MainPage(props) {

    const [books, setBooks] = useState([])
    const [open, setOpen] = useState(false)
    const [selectedBook, setSelectedBook] = useState();
    const [formBody, setFormBody] = useState({language:'en'}) 

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormBody({...formBody, [name]:value})
    }
    useEffect(() => {
        getBooks().then((data) => { setBooks(data) });
    }, [])
    const showBook = async (entryId) => {
        let book = books.filter(b => b.entryId === entryId)[0];
        const description = await getBookDescription(entryId);
        book.description = description;
        setSelectedBook(book);
        setOpen(true)
    }
    const speak = async () => {
        const data = await getAudioData(selectedBook.entryId);
        let audio = new Audio()
        let blobURL = window.URL.createObjectURL(data);
        audio.src = blobURL
        audio.play()
    }
    const sendMail = async () => {
        const text = `Hello dear friend,\n\n    I have sent you this book: ${selectedBook.title} with author: ${selectedBook.author}. This is the description: \n\n    "${selectedBook.description}" \n\n Yours, \n ${formBody.name}`
        const translated = await getTranslatedText(text, formBody.language);
        await sendBookToMail(formBody.email, translated);
    }
    return (
        <>

            {
                open ?
                    <div className="modal fixed top-0 left-0 book-modal outline-none overflow-x-hidden overflow-y-auto  w-full md:inset-0 h-modal md:h-full">
                        <div className="modal-dialog relative w-auto pointer-events-none">
                            <div style={{ maxWidth: '500px' }}
                                className="modal-content border-none book-modal-dialog relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                                <div
                                    className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                                    <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">{selectedBook.title}</h5>
                                    <button type="button"
                                        className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                        onClick={() => setOpen(false)} >x</button>
                                </div>
                                <div className="modal-body relative p-4 border-b dark:border-gray-200">
                                    {selectedBook.description}
                                </div>
                                <div style={{ margin: 5 }}>
                                    {selectedBook.author} | {selectedBook.publishing_house}
                                </div>
                                <div
                                    className="modal-footer flex flex-shrink-0 flex-wrap items-center p-4 border-t border-gray-200 rounded-b-md" style={{ justifyContent: 'space-between' }}>
                                    <p>Send to a friend</p>
                                    <input name="email" onChange={handleChange} className="shadow appearance-none border rounded py-2 px-3 text-gray-700 w-full leading-tight focus:outline-none focus:shadow-outline" style={{ marginTop:10, marginBottom:20 }} id="email" type="text" placeholder="Friend's Email" />
                                    <input name="name" onChange={handleChange} className="shadow appearance-none border rounded py-2 px-3 text-gray-700 w-full leading-tight focus:outline-none focus:shadow-outline" style={{ marginTop:10, marginBottom:20 }} id="name" type="text" placeholder="Your Name" />
                                    <div className="inline-block relative w-64" style={{marginBottom:20}}>
                                    <label className="block uppercase tracking-wide w-full text-gray-700 text-xs font-bold mb-2" style={{textAlign:'left'}} htmlFor="language">
                                        Language
                                    </label>
                                        <select name="language" onChange={handleChange} value={formBody.language} className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" id="language">
                                            <option value="en">English</option>
                                            <option value="de">German</option>
                                            <option value="es">Spanish</option>
                                            <option value="fr">French</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-7 right-0 flex items-center m-2 px-2 text-gray-700" style={{top:'2.3em !important'}}>
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                        </div>
                                    </div>
                                    <button type="button" disabled={!(formBody.name && formBody.language && formBody.email)} onClick={() => sendMail()} className="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 disabled:bg-blue-400 disabled:cursor-not-allowed disabled:transform-none disabled:transition-none  disabled:hover:bg-blue-400 focus:ring-4 focus:ring-blue-300">Send to friend!</button>
                                </div>
                                <div
                                    className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-center p-4 border-t border-gray-200 rounded-b-md">
                                    <button type="button" onClick={() => speak()} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Read me!</button>
                                    <button type="button" onClick={() => setOpen(false)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Close</button>
                                </div>
                            </div>
                        </div>
                    </div> : <> </>
            }
            <div className="grid grid-cols-1">
                <div className="main-page">
                    <h1 className='mt-10 text-blue-500 text-3xl font-bold'>Library With Friends!</h1>
                    <div className="small-line"></div>
                </div>
                <div className="grid grid-cols-1">

                    <div className="grid grid-cols-1">
                        {
                            books.map(book => <div key={book.entryId} className="book" onClick={() => showBook(book.entryId)}> {book.title} | {book.author} | {book.publishing_house}</div>)
                        }
                    </div>
                </div>
            </div>
        </>


    );


}

export default MainPage;