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

ActiveRecord::Schema.define(version: 20170421034401) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "catings", force: :cascade do |t|
    t.integer  "need_id"
    t.integer  "cat_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["cat_id"], name: "index_catings_on_cat_id", using: :btree
    t.index ["need_id"], name: "index_catings_on_need_id", using: :btree
  end

  create_table "cats", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "follows", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "followable_type"
    t.integer  "followable_id"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["followable_type", "followable_id"], name: "index_follows_on_followable_type_and_followable_id", using: :btree
    t.index ["user_id"], name: "index_follows_on_user_id", using: :btree
  end

  create_table "needs", force: :cascade do |t|
    t.string   "title"
    t.text     "story"
    t.integer  "amount"
    t.date     "expiration"
    t.string   "link"
    t.boolean  "completed",                           default: false
    t.string   "img_url"
    t.integer  "org_id"
    t.integer  "type_id"
    t.datetime "created_at",                                          null: false
    t.datetime "updated_at",                                          null: false
    t.string   "zip"
    t.decimal  "lat",        precision: 10, scale: 6
    t.decimal  "lng",        precision: 10, scale: 6
    t.string   "city"
    t.string   "state"
    t.index ["org_id"], name: "index_needs_on_org_id", using: :btree
    t.index ["type_id"], name: "index_needs_on_type_id", using: :btree
  end

  create_table "orgs", force: :cascade do |t|
    t.string   "name"
    t.integer  "needs_count"
    t.integer  "fulfilled_count"
    t.string   "password_digest"
    t.string   "street"
    t.string   "city"
    t.string   "state"
    t.string   "zip"
    t.string   "phone"
    t.string   "email"
    t.string   "ein"
    t.boolean  "verified"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "token"
  end

  create_table "types", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "typings", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "type_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["type_id"], name: "index_typings_on_type_id", using: :btree
    t.index ["user_id"], name: "index_typings_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "email"
    t.string   "phone"
    t.string   "password_digest"
    t.string   "zip"
    t.integer  "needs_met",                                default: 0
    t.string   "img_url"
    t.string   "token"
    t.integer  "follows_count"
    t.datetime "created_at",                                           null: false
    t.datetime "updated_at",                                           null: false
    t.decimal  "lat",             precision: 10, scale: 6
    t.decimal  "lng",             precision: 10, scale: 6
    t.string   "city"
    t.string   "state"
  end

  add_foreign_key "catings", "cats"
  add_foreign_key "catings", "needs"
  add_foreign_key "follows", "users"
  add_foreign_key "needs", "orgs"
  add_foreign_key "needs", "types"
  add_foreign_key "typings", "types"
  add_foreign_key "typings", "users"
end
