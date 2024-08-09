const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const email = document.getElementById('email')
const message = document.getElementById('message')
const checkBoxContacted = document.getElementById('contacted')
const queryType1 = document.getElementById('queryType1')
const queryType2 = document.getElementById('queryType2')
const form = document.getElementById('form')


const checkRadioValid = () => {
  const queryTypes = document.getElementsByName('queryType')
  console.log(queryTypes)
  if(queryTypes[0].checked || queryTypes[1].checked ){
    console.log('valid radio buttons')
    queryTypes[0].classList.remove('invalid')
    queryTypes[0].classList.add('valid')

    return true
  } else if(!queryTypes[0].checked && !queryTypes[1].checked){
    console.log('not valid radio buttons')
    queryTypes[0].classList.add('invalid')
    queryTypes[0].classList.remove('valid')

    return false
  }

}

const checkEmailalid = () => {
  const email = document.getElementById('email')
  const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
  if(email.value.length === 0 || (!emailRegExp.test(email.value)) ){
    console.log('not valid email')
    
    email.classList.add('invalid')
    email.classList.remove('valid')
    return false

  } else if(email.value.length !== 0  && emailRegExp.test(email.value) ){
    console.log('valid email')
    
    email.classList.remove('invalid')
    email.classList.add('valid')
    return true
  }

}

const checkFirstNameValid = () => {
  const firstName = document.getElementById('firstName')
  const firstNameRegExp = /[a-zA-Z\d]{3,}/ 
  
  
  if(firstName.value.length === 0 || (!firstNameRegExp.test(firstName.value)) ){
    console.log('not valid firstName')
    
    firstName.classList.add('invalid')
    firstName.classList.remove('valid')
    return false

  } else if(firstName.value.length !== 0  && firstNameRegExp.test(firstName.value) ){
    console.log('valid firstName')
    
    firstName.classList.remove('invalid')
    firstName.classList.add('valid')
    return true
  }

}

const checkLastNameValid = () => {
  const lastName = document.getElementById('lastName')
  const lastNameRegExp = /[a-zA-Z]{4,}/ 
  
  
  if(lastName.value.length === 0 || (!lastNameRegExp.test(lastName.value)) ){
    console.log('not valid lastName')
    
    lastName.classList.add('invalid')
    lastName.classList.remove('valid')
    return false

  } else if(lastName.value.length !== 0  && lastNameRegExp.test(lastName.value) ){
    console.log('valid lastName')
    
    lastName.classList.remove('invalid')
    lastName.classList.add('valid')
    return true
  }

}

const checkMessageValid = () => {
  const message = document.getElementById('message')
  const messageRegExp = /[آ-یa-zA-Z\d]{10,1000}/ 
  
  
  if(message.value.length === 0 || (!messageRegExp.test(message.value)) ){
    console.log('not valid message')
    
    message.classList.add('invalid')
    message.classList.remove('valid')
    return false

  } else if(message.value.length !== 0  && messageRegExp.test(message.value) ){
    console.log('valid message')
    
    message.classList.remove('invalid')
    message.classList.add('valid')
    return true
  }

}

const CheckBoxValidation = () => {
  const checkBoxContacted = document.getElementById('contacted')


  if(!checkBoxContacted.checked){
    console.log('not valid checkBoxContacted')
    
    checkBoxContacted.classList.add('invalid')
    checkBoxContacted.classList.remove('valid')
    return false

  } else if(checkBoxContacted.checked){
    console.log('valid checkBoxContacted')
    
    checkBoxContacted.classList.remove('invalid')
    checkBoxContacted.classList.add('valid')
    return true
  }
}

window.addEventListener('laod' , () => {
  
})

email.addEventListener('input' , (e) => {checkEmailalid()})
firstName.addEventListener('input' , (e) => {checkFirstNameValid()})
lastName.addEventListener('input' , (e) => {checkLastNameValid()})
message.addEventListener('input' , (e) => {checkMessageValid()})
checkBoxContacted.addEventListener('click' , CheckBoxValidation)
queryType1.addEventListener('click' , checkRadioValid)
queryType2.addEventListener('click' , checkRadioValid)



form.addEventListener('submit' , (e) => {
  e.preventDefault();

  const isEmailValid = checkEmailalid()
  const isRadioValid = checkRadioValid()
  const isFirstNameValid = checkFirstNameValid()
  const isLastNameValid = checkLastNameValid()
  const isMessageValid = checkMessageValid()
  const isCheckBoxValid = CheckBoxValidation()

  const formData =  {
    firstName : firstName.value,
    lastName : email.value,
    email : email.value,
    queryType : queryType1.checked ? queryType1.value : queryType2.checked ? queryType2.value : false,
    message : message.value,
    contacted : checkBoxContacted.checked
  }

  // console.log(isEmailValid,isFirstNameValid ,isLastNameValid,isRadioValid,isMessageValid)

  if((!isEmailValid) || (!isRadioValid) || (!isFirstNameValid) || (!isLastNameValid) || (!isMessageValid) || (!isCheckBoxValid) ){
    showToast('please enter valid fields' , 'validation Error' , 'danger')
    // alert(JSON.stringify(formData))
    console.log(formData)
    
  } else {
    showToast(`Thanks for completing the form. We'll be in touch soon!` , 'Message Sent!' , 'success' , 3000)
    // alert(JSON.stringify(formData))
    // 1 send form data
    // 2 show toast danger if server side validation failed
    // 3 show toast success and redirect if sendig data was successful


  }
  
})