const SelectRecipients = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Select Recipients</h1>
        <p className="text-gray-700 mb-8">Choose the recipients for your screening.</p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Continue
        </button>
        </div>
    );
}

export default SelectRecipients;
