function booWho(bool) {
  
  if (typeof bool === "boolean") {
    console.log("true");
    return true;
  }
  else {
    console.log("false");
    return false;
  }

}

booWho(null);