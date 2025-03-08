const Home = {
    template: `
        <div class="container mt-5">
            <div class="jumbotron text-center">
                <h1>Welcome to New Beginnings Assembly of God</h1>
                <p class="lead">Join us every Sunday at 10:00 AM</p>
            </div>
            <div class="row mt-5">
                <div class="col-md-4">
                    <h3>Our Mission</h3>
                    <p>To spread love and hope throughout our community.</p>
                </div>
                <div class="col-md-4">
                    <h3>Weekly Services</h3>
                    <p>Sunday Worship: 10:00 AM<br>Bible Study: Wednesday 7:00 PM</p>
                </div>
                <div class="col-md-4">
                    <h3>Get Involved</h3>
                    <p>Join our various ministries and make a difference.</p>
                </div>
            </div>
        </div>
    `
}

const About = {
    template: `
        <div class="container mt-5">
            <h2>About Us</h2>
            <p>We are a welcoming community of believers dedicated to serving God and our neighbors.</p>
        </div>
    `
}

const Services = {
    template: `
        <div class="container mt-5">
            <h2>Our Services</h2>
            <div class="row">
                <div class="col-md-6">
                    <h4>Sunday Service</h4>
                    <p>Join us every Sunday at 10:00 AM for worship and fellowship.</p>
                </div>
                <div class="col-md-6">
                    <h4>Bible Study</h4>
                    <p>Wednesday evenings at 7:00 PM</p>
                </div>
            </div>
        </div>
    `
}

const Contact = {
    template: `
        <div class="container mt-5">
            <h2>Contact Us</h2>
            <div class="row">
                <div class="col-md-6">
                    <form @submit.prevent="submitForm">
                        <div class="mb-3">
                            <label class="form-label">Name</label>
                            <input type="text" class="form-control" v-model="name">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Email</label>
                            <input type="email" class="form-control" v-model="email">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Message</label>
                            <textarea class="form-control" v-model="message"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            name: '',
            email: '',
            message: ''
        }
    },
    methods: {
        submitForm() {
            alert('Message sent!')
            this.name = ''
            this.email = ''
            this.message = ''
        }
    }
}

const app = Vue.createApp({
    data() {
        return {
            currentPage: 'home'
        }
    },
    computed: {
        currentYear() {
            return new Date().getFullYear();
        }
    },
    components: {
        home: Home,
        about: About,
        services: Services,
        contact: Contact
    }
})

app.mount('#app')
