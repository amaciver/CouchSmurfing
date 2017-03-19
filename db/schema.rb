# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170319191748) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cities", force: :cascade do |t|
    t.string   "name",        null: false
    t.text     "description", null: false
    t.text     "image_url",   null: false
    t.text     "banner_url",  null: false
    t.text     "map_url",     null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "hosts", force: :cascade do |t|
    t.integer  "city_id",                                      null: false
    t.string   "name",                                         null: false
    t.integer  "age",                                          null: false
    t.string   "sex",                                          null: false
    t.string   "city",                                         null: false
    t.string   "location",                                     null: false
    t.float    "lat",                                          null: false
    t.float    "lng",                                          null: false
    t.string   "interests",       default: [],                              array: true
    t.text     "about_me"
    t.string   "image_url",                                    null: false
    t.string   "house_image_url"
    t.string   "status",          default: "Accepting Guests", null: false
    t.datetime "created_at",                                   null: false
    t.datetime "updated_at",                                   null: false
    t.index ["city_id"], name: "index_hosts_on_city_id", using: :btree
  end

  create_table "requests", force: :cascade do |t|
    t.integer  "user_id",                         null: false
    t.integer  "host_id",                         null: false
    t.datetime "start_date",                      null: false
    t.datetime "end_date",                        null: false
    t.string   "status",     default: "APPROVED"
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
    t.index ["host_id"], name: "index_requests_on_host_id", using: :btree
    t.index ["user_id"], name: "index_requests_on_user_id", using: :btree
  end

  create_table "reviews", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "host_id",    null: false
    t.text     "body",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["host_id"], name: "index_reviews_on_host_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.text     "image_url"
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
