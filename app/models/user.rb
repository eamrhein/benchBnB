class User < ApplicationRecord
  attr_reader :password
  validates :username, :session_token, :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def ensure_token
    self.session_token = SecureRandom.urlsafe_base64
  end

  def is_password?(plaintxt)
    BCrypt::Password.new(password_digest).is_password?(plaintxt)
  end

  def password=(plaintxt)
    @password = plaintxt
    self.password_digest = BCrypt::Password.create(plaintxt)
  end

  def reset_token!
    update!(session_token: SecureRandom::urlsafe_base64)
    session_token
  end 

end
