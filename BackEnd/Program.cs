using BigBangProject.Data;
using BigBangProject.Authentication;
using BigBangProject.Repository.Token;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using BigBangProject.Repository.AppointmentService;
using BigBangProject.Repository.DoctorService;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<AuthContext>(optionsAction: options => options.UseSqlServer(builder.Configuration.GetConnectionString(name: "SQLConnection")));
builder.Services.AddDbContext<HospitalContext>(optionsAction: options => options.UseSqlServer(builder.Configuration?.GetConnectionString(name: "SQLConnection")));
builder.Services.AddScoped<IAppointmentServices,AppointmentServices>();
builder.Services.AddScoped<IDoctorServices,DoctorServices>();
// For Identity  
builder.Services.AddIdentity<ApplicationUser, IdentityRole>()
    .AddEntityFrameworkStores<AuthContext>()
    .AddDefaultTokenProviders();

// Adding Authentication 
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
})

// Adding Jwt Bearer  
.AddJwtBearer(options =>
{
    options.SaveToken = true;
    options.RequireHttpsMetadata = false;
    options.TokenValidationParameters = new TokenValidationParameters()
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidAudience = builder.Configuration["JWT:ValidAudience"],
        ValidIssuer = builder.Configuration["JWT:ValidIssuer"],
        ClockSkew = TimeSpan.Zero,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["JWT:Secret"]))
    };
});
builder.Services.AddTransient<ITokenService, TokenService>();
builder.Services.AddCors(options =>
{
    options.AddPolicy("Policy", builder =>
    {
        builder.AllowAnyHeader();
        builder.AllowAnyMethod();
        builder.AllowAnyOrigin();
    });
});
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("Policy");
app.UseAuthorization();

app.MapControllers();

app.Run();
