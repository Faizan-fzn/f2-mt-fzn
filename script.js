
body{
    background-color: #191919;
 }
 .logo{
    display: flex;
    width: 100%;
    height: 200px;
    align-items: center;
    justify-content: center;
 }
 .searchBar{
    display: flex;
    align-items: center;
    gap:5px;
 }
 .searchBar span{
    color: white;
    font-size: xx-large;
    padding-right:20px;
 }
 #search-bar{
     Width: 644px;
     Height: 54px;
     background-color: #262626;
     border-radius: 8px;
     color: #808080;
     font-size: larger;
 }
 .btn{
     background-color: #1E6F9F;
     width: 90px;
     height: 54px;
     border-radius: 8px;
     color: white;
     border: none;
     cursor: pointer;
 }
 .navBar{
     display: flex;
     justify-content: center;
     gap: 8px;
     margin-top: -30px;
 }
.close-btn{
    background-color: red;
    font-weight: 300;
    height: 30px;
}
#submit-btn{
    height: 30px;
}
.form-btn{
    display: flex;
    justify-content: center;
    gap:30px;
}
form {
    border: 1px solid #808080;
    width: 60vw;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    z-index: 10;
    background-color: #808080;
}
.show{
    display: flex;
    justify-content: center;
    padding: 30px;
    margin-top: 10px;
}
.hide{
    display: none;
}
.container{
    width: 600px;
    height: 55px;
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
}
.To-Do-1{
   color: #1e6f9f;
   font:Inter;
   font-weight: 700;
   font-size: 14px;

}
.High-1{
    color: #8284fa;
    font-weight: 700;
    font-size:14px;
    font:Inter;
    justify-content: space-between;
}
.count{
    color: white;
    background-color: #333333;
    padding: 3px 9px;
    border-radius: 12px;
}
main{
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: auto;
    grid-template-columns: repeat(3,1fr);
    gap:10px;
    padding:10px;
}
.card{
    display: flex;
    justify-content: space-between;
    background-color: #262626;
    align-items: center;
    width: 570px;
    height: 50px;
    gap: 5px;
    padding: 10px;
    box-shadow: 0px 2px 8px 0px #0000000F;
    border-radius: 8px;
    color: rgba(255, 255, 255, 0.83);
}
.task-holder{
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
}
