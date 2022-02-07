let emailsInBlackList = ['blockEmail@email.com', 'blockEmail1@email.com', 
'blockEmail2@email.com', 'blockEmail3@email.com', 'blockEmail4@email.com'];
let emails = ['rightEmail@email.com', 'rightEmail1@email.com','blockEmail@email.com', 
'rightEmail2@email.com', 'rightEmail3@email.com', 'rightEmail4@email.com','blockEmail2@email.com'];

Filter(emails, emailsInBlackList)

function Filter(AllEmail, BadEmail) {
    let idClear = []
    let i = 0
    for (let emailOnBlackList in BadEmail) {
        let hh = []
        for (let idOnAllEmails in AllEmail) {
            if (AllEmail[idOnAllEmails] == BadEmail[emailOnBlackList])
            {
                continue
            }
            else if (idClear.includes(idOnAllEmails) != true && AllEmail[idOnAllEmails] != BadEmail[emailOnBlackList]){
              idClear.push(idOnAllEmails)
            }
        } 
    }
    for (let iddd of idClear) {
        if (BadEmail.includes(AllEmail[iddd]) != true){
            console.log(AllEmail[iddd])
        }
    }
}
