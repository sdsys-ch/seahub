import random
import string


def gen_shared_secret(length=23):
    return ''.join(random.choice(string.ascii_lowercase + string.digits) for i in range(length))
