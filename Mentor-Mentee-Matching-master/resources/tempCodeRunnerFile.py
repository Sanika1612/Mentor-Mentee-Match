def mentor_signup():
    print("Hello")
    username = request.json["username"]
    password = request.json["password"]
    role = request.json["role"]
    name = request.json["name"]
    phonenumber = request.json["phonenumber"]
    state = request.json["state"]
    interest1 = request.json["interest1"]
    interest2 = request.json["interest2"]
    interest3 = request.json["interest3"]
    gender = request.json["gender"]
    career = request.json["career"]
    no_of_students = request.json["no_of_students"]
    language = request.json["language"]

    print("This role ", role)
    print("This is username", username)
    # to check if they already exist in mentor signup
    mentor_in_signup = MentorSignup.query.get(username)
    if mentor_in_signup:
        
        #username already exists in  mentor signup
        return jsonify({'code':402})

    hashed_pwd = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

    #creating row for menteeSignup Table
    new_mentor_signup = MentorSignup(username, hashed_pwd, role, name, phonenumber, state, interest1, interest2, interest3, gender, career, no_of_students, language)

    # adding to MenteeSignup Table
    db.session.add(new_mentor_signup)
    db.session.commit()

    #adding to csv file in ML folder
    mentor_data = [username, state, interest1, interest2, interest3, gender, career, language]

    basedir = os.path.abspath(os.path.dirname(__file__))
    csv_addr = os.path.join(basedir, 'ML/mentor_data.csv')

    with open(str(csv_addr), 'a+', newline='') as f:

        writer_object = writer(f)
        writer_object.writerow(mentor_data)
        f.close()

    #return confirmation
    return jsonify({'code':200})
