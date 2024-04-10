import styles from './Address.module.scss'
export default function Address() {
    return (
        <form action="" className={styles.address_payment}>
            <h1 className={styles.pay_heading}>Адрес</h1>
            <div className={styles.form_payment}>
            <ul className={styles.email_index}>
                <li>Почтовый индекс</li>
                <input type="number" className={styles.input_form} placeholder='123456'/>
            </ul>
            <ul className={styles.email_index}>
                <li>Город</li>
                <input type="text" className={styles.input_form} placeholder='Москва'/>
            </ul>
            <ul className={styles.email_index}>
                <li>Улица</li>
                <input type="text" className={styles.input_form}placeholder='Улица'/>
            </ul>
            <ul className={styles.email_index}>
                <li>Дом</li>
                <input type="text" className={styles.input_form}placeholder='Дом'/>
            </ul>
            <ul className={styles.email_index}>
                <li>Подьезд</li>
                <input type="text" className={styles.input_form} placeholder='Подьезд'/>
            </ul>
            <ul className={styles.email_index}>
                <li>Этаж</li>
                <input type="number" className={styles.input_ll} placeholder='3'/>
            </ul>
            <ul className={styles.email_index}>
                <li>Квартира</li>
                <input type="number" className={styles.input_ll} placeholder='34'/>
            </ul>
            <ul className={styles.email_index}>
                <li>Телефон</li>
                <input type="number" className={styles.input_form} placeholder='+7(900)000 000 00'/>
            </ul>
            <ul className={styles.email_index}>
                <li>Email</li>
                <input type="email" className={styles.input_form} placeholder='mail@mail.com'/>
            </ul>   
            <ul className={styles.message}>
                <li>Сообщение</li>
                <textarea className={styles.mesarea}  placeholder='Позвоните минут за 30!'></textarea>
            </ul>
            </div>
        </form>
    )
}