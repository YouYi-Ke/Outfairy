<script setup>
</script>

<template>
    <footer class="footer">
        <hr class="hrLong" />
        <div class="container">
            <div class="row">
                <div class="footer-col">
                    <h4>OUTFAIRY</h4>
                    <ul>
                        <li><a href="#">About us</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>CUSTOMER SERVICE</h4>
                    <ul>
                        <li><a href="#">Return</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>CONTACT US</h4>
                    <ul>
                        <li><a href="#">Email</a></li>
                        <li><a href="#">Instagram</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <hr class="hrShort" />
    </footer>
</template>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.hrLong{
    width: 70%;
    margin: 2% auto;
}

.hrShort{
    width: 65%;
    margin: 2% auto;
}

.container {
    max-width: 1210px;
    margin: auto;
}

.row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
}

ul {
    list-style: none;
}

.footer {
    padding: 1rem 0;
    line-height: 1.5;
    font-family: "Italiana", serif; 
}

.footer-col {
    width: 25%;
    padding: 0 15px;
    text-align: center;
    justify-content: center;
}

.footer-col h4 {
    font-size: 24px;
    color: black;
    margin-bottom: 30px;
    font-weight: 500;
    position: relative;
}

.footer-col ul li:not(:last-child){
	margin-bottom: 10px;
}
.footer-col ul li a{
	font-size: 16px;
	text-transform: capitalize;
	color: black;
	text-decoration: none;
	font-weight: 300;
	display: block;
}

/*responsive*/
@media(max-width: 767px){
    .footer-col{
        width: 100%;
        margin-bottom: 30px;
    }
    .footer-col h4{
        font-size: 16px;
        color: black;
        margin-bottom: 30px;
        font-weight: 500;
        position: relative;
    }
    .footer-col ul li{
        font-size: 12px;
        text-transform: capitalize;
        color: black;
        text-decoration: none;
        font-weight: 300;
        display: block;
    }
}
</style>