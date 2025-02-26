
// type aliases is used to define a custom type, making it easier to use and more readable 
type Status = "pending" | "approved" | "rejected" | "Cancelled";

let packageStatus: Status = "pending";
packageStatus = "Failed";