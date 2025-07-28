const ReviewSubmit = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Review and Submit</h1>
        <p className="text-gray-700 mb-6">Please review your information before submitting.</p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Submit
        </button>
        </div>
    );
}

export default ReviewSubmit;
